import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET() {
  try {
    const query = `*[_type == "product"]{
            id,
            productName,
            category,
            price,
            inventory,
            colors,
            status,
            "imageUrl": image.asset->url,
            description
        }`;
    const products = await client.fetch(query);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
