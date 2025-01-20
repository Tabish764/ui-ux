
import { NextResponse } from 'next/server';

let cart: any[] = []; 

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const { product } = await request.json();
  const existingProduct = cart.find((item: any) => item.id === product.id);
  
  if (existingProduct) {
    existingProduct.quantity += 1; 
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  cart = cart.filter((item: any) => item.id !== id);
  return NextResponse.json(cart);
}
