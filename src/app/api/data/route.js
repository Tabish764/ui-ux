import { NextResponse } from 'next/server';
import { products } from '../../util/data';

export async function GET() {
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
        },
      });
}