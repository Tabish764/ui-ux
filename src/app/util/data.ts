interface Product {
    id: number;
    productName: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    image: string;
    description: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      productName: "Nike Air Force 1 Mid '07",
      category: "Men's Shoes",
      price: 10795,
      inventory: 20,
      colors: ["White"],
      status: "Just In",
      image: "https://template-03-api.vercel.app/products/1.png",
      description: "The Nike Air Force 1 Mid '07 delivers timeless style with premium leather and mid-cut design. Perfect for everyday wear, it provides exceptional comfort and durability. The iconic Air-Sole cushioning adds responsive support for long-lasting performance."
    },
    {
      id: 2,
      productName: "Nike Court Vision Low Next Nature",
      category: "Men's Shoes",
      price: 4995,
      inventory: 35,
      colors: ["Black"],
      status: "Just In",
      image: "https://template-03-api.vercel.app/products/2.png",
      description: "The Nike Court Vision Low Next Nature combines retro basketball style with modern sustainability. Made with at least 20% recycled content, it features a sleek design, durable materials, and ultimate comfort for everyday wear."
    },
    {
      id: 3,
      productName: "Nike Air Force 1 PLT.AF.ORM",
      category: "Women's Shoes",
      price: 8695,
      inventory: 18,
      colors: ["White"],
      status: "Just In",
      image: "https://template-03-api.vercel.app/products/3.png",
      description: "The Nike Air Force 1 PLT.AF.ORM elevates the iconic AF1 silhouette with bold design updates. Featuring a platform sole and premium materials, this women's shoe redefines style and comfort in a fresh, modern way."
    },
    {
      id: 4,
      productName: "Nike Air Force 1 React",
      category: "Men's Shoes",
      price: 13295,
      inventory: 12,
      colors: ["White"],
      status: "Just In",
      image: "https://template-03-api.vercel.app/products/4.png",
      description: "The Nike Air Force 1 React takes the classic AF1 to the next level with React technology. Experience unparalleled cushioning and modern design details for all-day comfort and a bold statement of style."
    },
    {
      id: 5,
      productName: "Air Jordan 1 Elevate Low",
      category: "Women's Shoes",
      price: 11895,
      inventory: 8,
      colors: ["White"],
      status: "Promo Exclusion",
      image: "https://template-03-api.vercel.app/products/5.png",
      description: "The Air Jordan 1 Elevate Low features a clean, minimal design with premium materials. Its platform sole adds a touch of height and modern edge, while ensuring comfort and durability for all-day wear."
    },
    {
      id: 6,
      productName: "Nike Standard Issue Basketball Jersey",
      category: "Women's Basketball Jersey",
      price: 2895,
      inventory: 40,
      colors: ["White"],
      status: "Just In",
      image: "https://template-03-api.vercel.app/products/6.png",
      description: "The Nike Standard Issue Basketball Jersey delivers a lightweight, breathable fit for top performance. Designed for athletes, it combines style and functionality to keep you cool and comfortable on and off the court."
    },
    {
      id: 7,
      productName: "Nike Dunk Low Retro SE",
      category: "Men's Shoes",
      price: 9695,
      inventory: 15,
      colors: ["Beige"],
      status: "Promo Exclusion",
      image: "https://template-03-api.vercel.app/products/7.png",
      description: "The Nike Dunk Low Retro SE brings vintage vibes with a modern twist. Featuring premium materials and a neutral color palette, this classic sneaker is versatile, stylish, and perfect for any casual occasion."
    },
    {
      id: 8,
      productName: "Nike Dri-FIT UV Hyverse",
      category: "Men's Short-Sleeve Graphic Fitness Top",
      price: 2495,
      inventory: 50,
      colors: ["Teal"],
      status: "Sustainable Materials",
      image: "https://template-03-api.vercel.app/products/8.png",
      description: "The Nike Dri-FIT UV Hyverse graphic top offers comfort and UV protection in style. Made from soft, breathable fabric, this fitness top keeps you cool and dry during workouts or casual outings."
    },
    {
      id: 9,
      productName: "Nike Court Vision Low",
      category: "Men's Shoes",
      price: 5695,
      inventory: 25,
      colors: ["White"],
      status: "Just In",
      image: "https://template-03-api.vercel.app/products/9.png",
      description: "The Nike Court Vision Low blends basketball-inspired style with everyday comfort. Featuring a sleek design and durable materials, this versatile shoe is perfect for any casual wardrobe."
    },
    {
      id: 10,
      productName: "Nike Air Max 270",
      category: "Men's Shoes",
      price: 13295,
      inventory: 20,
      colors: ["Black"],
      status: "Trending",
      image: "https://template-03-api.vercel.app/products/1.png",
      description: "The Nike Air Max 270 features the largest Air unit yet for exceptional cushioning. Its bold design, breathable mesh upper, and vibrant colors make it a standout choice for style and comfort."
    },
    // ... Add the rest similarly
  ];
  
  export default products;
  