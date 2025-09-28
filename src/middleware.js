import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  console.log("form middleware", req.nextUrl.pathname);
  const token = await getToken({req})
  if(token){
     console.log("JSON Web Token", JSON.stringify(token))
     return NextResponse.next();
  }
  else{
   return NextResponse.redirect(new URL('/login',req.url))
  }
};

export const config = {
  matcher: ["/myBookings", 
    "/myBookings/:path*",
     "/checkout/:path*"], 
};
