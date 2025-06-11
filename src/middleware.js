// src/middleware.ts
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname === "/home") {
    return context.redirect("/home/projects", 302); // 302 = temporary redirect
  }

  return next();
});
