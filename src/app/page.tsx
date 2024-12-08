import Clothes from "./components/Clothes";
import Essentials from "./components/Essentials";
import Featured from "./components/Featured";
import Flight from "./components/Flight";

import Hero from "./components/Hero";

import Products from "./components/Products";



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