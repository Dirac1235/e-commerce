import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

const roleRoutes = ["/admin"];

const protectedRoutes = ["/admin", "/profile", "/checkout", "/cart"];

const authRoutes = ["/login"];

const homeRoutes = ["/dashboard"];

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const authUser = accessToken ? jwtDecode(accessToken) : null;

  const isAuthPath = authRoutes.find((route) => pathname.startsWith(route));

  const isRolePath = roleRoutes.find((route) => pathname.startsWith(route));

  const ishomePath = homeRoutes.find((route) => pathname === route);

  const isProtectedPath = protectedRoutes.find((route) =>
    pathname.startsWith(route)
  );

  if (authUser?.userId && authUser.role) {
    const userRolePath = `/${authUser.role.toLowerCase()}`;

    if (isRolePath && !pathname.startsWith(userRolePath)) {
      const currentPath = pathname.replace(
        RegExp(roleRoutes.join("|")),
        userRolePath
      );
      if (roleRoutes.includes(userRolePath)) {
        return NextResponse.redirect(new URL(currentPath, request.url));
      }
      return NextResponse.redirect(new URL("/", request.url));
    }

    if ((ishomePath || isAuthPath) && roleRoutes.includes(userRolePath)) {
      return NextResponse.redirect(new URL(userRolePath, request.url));
    } else if (isAuthPath) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else if (isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|~offline|static|sw.js|.*\\..*|_next|favicon.ico|robots.txt).*)",
  ],
};
