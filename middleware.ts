// import authConfig from "./auth.config";
// import NextAuth from "next-auth";
// import {
//   publicRoutes,
//   authRoutes,
//   apiAuthPrefix,
//   DEFAULT_LOGIN_REDIRECT,
// } from "@/routes";
// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   let isLoggedIn = !!req.auth?.user;
//   const { nextUrl } = req;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
//   if (isApiAuthRoute) {
//     return null;
//   }
//   if (isAuthRoute) {
//     console.log("isAuthRoute", isLoggedIn);

//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return null;
//   }
//   if (!isLoggedIn && !isPublicRoute) {
//     return Response.redirect(new URL("/auth/login", nextUrl));
//   }
//   return null;
// });
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
