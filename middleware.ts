import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Exclui arquivos estáticos e a pasta de build do Next.js
    "/", // Corresponde à raiz
    "/(api|trpc)(.*)" // Corresponde a qualquer rota que comece com /api ou /trpc
  ],
};
