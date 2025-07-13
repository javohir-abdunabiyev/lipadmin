import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET!; // обязательно должен быть в `.env`

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/admin', req.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/admin', req.url));
    }
}

export const config = {
    matcher: ['/admin/dashboard/:path*'],
};
