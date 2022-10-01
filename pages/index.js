import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
// import { useState, createContext, useContext } from 'react'
// import { ItemContext } from '../context/Itemcontext'


export default function Home() {
  // const a = useContext(ItemContext)
  // console.log(a)
  return (
    <>
      <Navbar />
      <Slider />
      <Popular />
      <Footer />
    </>
  )
}
