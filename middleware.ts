import { NextFetchEvent, NextResponse } from "next/server"

export const middleware = () => {
    const response = NextResponse.next();
    response.headers.set('x-middleware-cache', 'no-cache');
    return response;
}