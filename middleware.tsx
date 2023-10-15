// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("accessToken")?.value;
//   const role = request.cookies.get("role")?.value;
//   console.log(accessToken, role);

//   if (request.nextUrl.pathname.startsWith("/user")) {
//     if (accessToken && role === "USER") {
//       return NextResponse.next();
//     } else {
//       return NextResponse.rewrite(new URL("/user/login", request.nextUrl));
//     }
//   }

//   if (request.nextUrl.pathname.startsWith("/seller")) {
//     if (role === "SELLER") {
//       if (request.nextUrl.pathname === "/seller/seller-signup") {
//         return NextResponse.next();
//       }
//       if (accessToken) {
//         return NextResponse.next();
//       } else {
//         return NextResponse.rewrite(
//           new URL("/seller/seller-login", request.nextUrl)
//         );
//       }
//     }
//   }

//   return NextResponse.next();
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const role = request.cookies.get("role")?.value;


  if (request.nextUrl.pathname.startsWith("/user")) {
    if (accessToken && role === "USER") {
      return NextResponse.next();
    } else {
      return NextResponse.rewrite(new URL("/user/login",request.nextUrl));
    }
  }

  if (request.nextUrl.pathname.startsWith("/seller")) {
    if (accessToken && role === "SELLER") {
      return NextResponse.next();
    } else {
      return NextResponse.rewrite(
        new URL("/seller/seller-login",request.nextUrl)
      );
    }
  }

  return NextResponse.next();
} 