import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // return NextResponse.redirect(new URL('/home', request.url))
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/signIn' || path === '/register' || path === '/'
    // const isTrackPath = path === '/track';

    const token = request.cookies.get('token')?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    // if (isTrackPath && !token) {
    //     return NextResponse.redirect(new URL('/signIn', request.url));
    // }


    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/signIn', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/dashboard',
        '/register',
        '/signIn',
        '/track'
    ]
}