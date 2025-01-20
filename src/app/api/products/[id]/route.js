import { NextResponse } from "next/server";
import { products } from "../../../util/data";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Filter product by id
    const product = products.find((item) => item.id === parseInt(id, 10));

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
