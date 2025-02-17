import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isUploadRoute = createRouteMatcher(["/upload(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Restrict /admin to users with admin permissions
  if (isAdminRoute(req)) {
    await auth.protect((has) => {
      console.log(has({ permission: "org:talent:upload" }));
      
      return has({ permission: "admin" });
    });
  }

  // Restrict /upload to talent users only
  if (isUploadRoute(req)) {
    await auth.protect((has) => {
      return has({ permission: "org:talent:upload" });
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
