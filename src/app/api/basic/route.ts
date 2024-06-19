// src/app/api/basic/route.ts
import { NextResponse } from 'next/server';

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (id === '1') {
    return NextResponse.json({ message: 'Success' });
  } else {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }
}
