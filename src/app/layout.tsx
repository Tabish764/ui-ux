"use client";  // Mark the component as a client component

import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { ToastContainer } from 'react-toastify';
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";  // Import the hook
import { CartProvider } from "./context/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the current pathname
  const pathname = usePathname();

  // Check if the route is '/checkout'
  const isCheckoutRoute = pathname === "/checkout";

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
       
        {/* Only render these components if not on /checkout */}
        {!isCheckoutRoute && <Topbar />}
        {!isCheckoutRoute && <Navbar />}
        
        <main className="flex-grow">
        <CartProvider>
        <ToastContainer />
  {children}
</CartProvider>
          
          </main>
        
        {!isCheckoutRoute && <Footer />}
      </body>
    </html>
  );
}
