import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // return NextResponse.redirect(new URL('/home', request.url))
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/signIn' || path === '/register' || path === '/'

    const token = request.cookies.get('token')?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/dashboard',
        '/register',
        '/signIn'
    ]
}