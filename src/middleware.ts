import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    console.log(request.url);
    return NextResponse.next();
}