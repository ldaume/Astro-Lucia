/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
  }
}

declare global {
  namespace Lucia {
    interface UserAttributes {
      role: string;
    }
  }
}
