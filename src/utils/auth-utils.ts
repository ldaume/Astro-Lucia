// @ts-ignore
import UserAttributes = Lucia.UserAttributes;

export const isAdmin = (user: UserAttributes): boolean => {
  return user?.role === import.meta.env.SECRET_ADMIN_ROLE;
};
