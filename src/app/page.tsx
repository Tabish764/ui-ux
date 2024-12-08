import Clothes from "./components/Clothes";
import Essentials from "./components/Essentials";
import Featured from "./components/Featured";
import Flight from "./components/Flight";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Topbar from "./components/Topbar";


import React from 'react'

const page = () => {
  return (
    <>
   
    <Hero/>
    <Products/>
    <Featured/>
    <Clothes/>
    <Flight/>
    <Essentials/>
   
    </>
  )
}

export default page