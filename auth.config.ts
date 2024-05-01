import type { NextAuthConfig } from "next-auth";
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";
export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(DEFAULT_LOGIN_REDIRECT);
      // if (authRoutes.includes(nextUrl.pathname)) {
      //   return false;
      // }
      //根目录不做校验
      if (publicRoutes.includes(nextUrl.pathname)) {
        return true;
      }
      // if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
      //   return true;
      // }

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} as NextAuthConfig;
