import * as jose from 'jose';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import verifyToken from '../server/auth/verifyToken';
import { cookies } from 'next/headers';

const nonAuthRouts = ["/", "/rigister", "/forot-password"]
export async function middleware(request: NextRequest) {

    const pathname = request.nextUrl.pathname
    if (pathname.startsWith("/_next/static")) {
        return NextResponse.next()
    }
    var jwtoken = request.cookies.get("authToken")?.value
    if (jwtoken == "deleted" || (!jwtoken && nonAuthRouts.includes(pathname)))
        return NextResponse.next()

    if (jwtoken == "deleted" || (!jwtoken && !nonAuthRouts.includes(pathname)))
        return NextResponse.redirect(new URL('/', request.url))

    var isValid = await verifyToken();
    if (isValid)
        return NextResponse.next();
    var response=NextResponse.redirect(new URL('/', request.url))
        response.cookies.set('authToken', '', { maxAge: 0 })
    return response;


}







