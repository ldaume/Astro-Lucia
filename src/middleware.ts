import { lucia } from "@/lib/lucia";
import { verifyRequestOrigin } from "lucia";
import { defineMiddleware } from "astro:middleware";
import { isAdmin } from "@/utils/auth-utils";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.request.method !== "GET") {
    const originHeader = context.request.headers.get("Origin");
    const hostHeader = context.request.headers.get("Host");
    if (
      !originHeader || !hostHeader ||
      !verifyRequestOrigin(originHeader, [hostHeader])
    ) {
      return new Response(null, {
        status: 403,
      });
    }
  }

  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
  if (
    !sessionId &&
    !(context.request.url.endsWith("/login"))
  ) {
    context.locals.user = null;
    context.locals.session = null;
    if (import.meta.env.SECRET_INIT_APP === "true") {
      return next();
    } else {
      return next("/login");
    }
  }

  const { session, user } = await lucia.validateSession(sessionId || "");
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  }
  context.locals.session = session;
  context.locals.user = user;

  if (
    context.request.url.includes("/admin") && !isAdmin(user)
  ) {
    return context.rewrite("/login");
  } else {
    return next();
  }
});
