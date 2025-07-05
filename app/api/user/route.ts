import Request from 'axios'
import { NextRequest, NextResponse } from 'next/server';
// import Response from 'axios'
//
import { createUser } from '@@/app/script';
export async function GET() {

  return Response.json({ name: 'abhishek', email: 'abhishek867492@gmail.com' })
}

export async function POST(req: NextRequest, res: NextResponse) {

  const body = await req.json();
  createUser(body?.username, body?.password)
  console.log('the value of the body is', body)
  return NextResponse.json({ username: body?.username, password: body?.password })
}
