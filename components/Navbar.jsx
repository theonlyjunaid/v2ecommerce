import React, { useState } from 'react'
import { brands, categories } from '../data/navbar';
import Link from 'next/link';
import { useContext } from 'react'
import { ItemContext } from '../context/Itemcontext';


function Navbar() {
    const ShownItem = useContext(ItemContext)
    const trending = Object.entries(categories).slice(0, 4)
    const trendingCategory = Object.entries(categories).slice(0, 7)
    const trendingCategory1 = Object.entries(categories)
    const [isHover, setIsHover] = useState("hidden");
    const [isHover2, setIsHover2] = useState("hidden");
    const [isHover3, setIsHover3] = useState("hidden");
    const [isHover4, setIsHover4] = useState("hidden");
    const show = () => {
        if (isHover === "hidden") {
            setIsHover("block");
            setIsHover2("hidden")
        } else {
            setIsHover("hidden")
        }
    }
    const show2 = () => {
        if (isHover2 === "hidden") {
            setIsHover2("block");
            setIsHover("hidden")
        } else {
            setIsHover2("hidden")
        }
    }
    return (
        <div className='sticky top-0 left-0 w-full z-50'
            onMouseLeave={() => {
                setIsHover("hidden")
                setIsHover2("hidden")
                setIsHover3("hidden")
            }}
        >
            <nav className='md:flex justify-between md:px-4 lg:px-8 items-center py-3 bg-black text-white border-b border-gray-300 font-mono'>
                <div className='flex justify-between items-center'>
                    <div className='md:hidden' onClick={() => isHover3 === "menu" ? setIsHover3("") : setIsHover3("menu")}>
                        <i className='bx bx-menu text-4xl pl-1  font-base'></i>
                    </div>
                    <div className='text-5xl md:text-4xl lg:text-5xl'>
                        <Link href="/"><a > <h1 className='md-ml-2 lg:ml-5'>wrap</h1></a></Link>
                    </div>
                    <div className=' md:hidden text-4xl'>
                        <Link href="/cart"><a >   <i className='bx bx-cart-alt pr-2  font-base' ></i></a></Link>
                    </div>
                </div>
                <div className={`text-center md:flex text-lg  lg:text-base xl:text-xl font-semib md:items-center ${isHover3 === "menu" ? "" : "hidden"} `}>
                    <div className='md:item-center my-4'    >
                        <a href='#' className='px-2  lg:px-4' onMouseEnter={() => setIsHover(show)}
                            onClick={() => setIsHover(show)}>Select Device <i className='bx bx-chevron-down'></i></a>
                        <div className={` md:hidden divide-y  relative  p-3  w-full text-white text-sm  ${isHover} bg-gray-800 `}
                            onMouseLeave={() => setIsHover4("hidden")}

                        >
                            {Object.keys(brands).map((brand, index) => {

                                return (
                                    <div className=' md:hidden'
                                        key={index} >
                                        <div className=' flex items-center'>
                                            <div className=' '>
                                                <img className='w-[48px] ' src={brands[brand].logo} alt="" />
                                            </div>
                                            <div className='text-left ml-4'>
                                                <p className='hover:font-semibold'
                                                    onMouseEnter={() => setIsHover4(brands[brand].name)}
                                                    onClick={() => setIsHover4(brands[brand].name)}
                                                >{brands[brand].name}</p>
                                                <p className='font-thin'>{brands[brand].description}</p>
                                            </div>
                                        </div>
                                        <div className={`relative bg-gray-600 text-lg font-mono font-thin px-6 w-[100%]  mt-[3.6%] ${isHover4 === brands[brand].name ? "" : "hidden"} border-t border-white py-2`}>
                                            <ul className='divide-y'>
                                                {Object.keys(brands[brand].model).map((model, index) => {
                                                    return (
                                                        <Link key={index} href={"/" + "Item" + "/" + brands[brand].model[model].name.split(" ").join("-").toLowerCase()}><a > <li className='py-2 hover:font-semibold cursor-pointer' key={index}>{brands[brand].name + " " + brands[brand].model[model].name}</li></a></Link>
                                                    )
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className='item-center my-4'
                    >
                        <a href='#' className='px-2 lg:px-4' onMouseEnter={() => setIsHover2(show2)}
                            onClick={() => setIsHover2(show2)}>Skin Collection <i className='bx bx-chevron-down '></i></a>
                    </div>
                    <div className={`relative px-[10%] w-full bg-gray-800 text-white text-sm justify-around divide-y ${isHover2} md:hidden`}>
                        <div className='block  '>
                            <p className='text-lg pt-2 pb-1 font-base text-white  w-auto'
                                onMouseEnter={() => setIsHover4("trending")}
                                onClick={() => setIsHover4("trending")}
                            >
                                Most Trending
                            </p>
                            <div className={`grid grid-cols-2 gap-8 ${isHover4 === "trending" ? "" : "hidden"}  my-3`}>
                                {Object.keys(trending).map((index) => {
                                    return (
                                        <div className='hover:border-b-4 hover:border-l-4 border-white ' key={index}>
                                            <img src={trending[index][1].logo} alt="" />
                                        </div>)
                                })
                                }
                            </div>
                        </div>
                        <div className=' pb-2 pt-1 text-lg font-mono text-white font-thin   '>
                            <p className='font-base text-lg '
                                onMouseEnter={() => setIsHover4("collection")}
                                onClick={() => setIsHover4("collection")}
                            >
                                Collection
                            </p>
                            <div className='grid grid-cols-1  text-gray-300  text-center mt-4'>
                                <ul className={` divide-y ${isHover4 === "collection" ? "" : "hidden"} bg-gray-600`}>
                                    {Object.keys(trendingCategory1).map((index) => {
                                        return (
                                            <li className=' cursor-pointer text-base  font-thin hover:text-yellow-500 py-1' key={index}>{trendingCategory1[index][1].name}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div>
                        <a href='#' className='px-2 lg:px-4 my-4'>FAQs</a>
                    </div>
                    <div>
                        <a href='#' className='px-2 lg:px-4 my-4'>Device Not Found</a>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5  text-xl'>
                    {/* <i className='bx bx-search'></i> */}
                    <i className='bx bx-user hidden md:flex'></i>

                    <Link href="/cart"><a ><i className='bx bx-cart-alt hidden md:flex' >{ShownItem.cart}</i></a></Link> <div> </div>
                </div>
            </nav >
            <div className={`px-[35%] -mt-[12vh] md:mt-0 divide-y md:divide-y-0 absolute z-20 grid grid-cols-1 md:grid-cols-4 gap-6 p-8 md:px-[11%] w-full text-white text-sm  ${isHover} md:bg-black`}
                onMouseLeave={() => setIsHover("hidden")}
            >
                {Object.keys(brands).map((brand, index) => {

                    return (
                        <div className='hidden md:flex ' key={index}
                        >
                            <div className=' flex items-center'>
                                <div className='mx-2 '>
                                    <img className='w-[48px] ' src={brands[brand].logo} alt="" />
                                </div>
                                <div>
                                    <p className='hover:font-semibold'
                                        onMouseEnter={() => setIsHover3(brands[brand].name)}>{brands[brand].name}</p>
                                    <p className='font-thin'>{brands[brand].description}</p>
                                </div>
                            </div>
                            <div className={`absolute z-10 bg-black text-lg font-mono font-thin px-6 w-[19%]  mt-[3.6%] ${isHover3 === brands[brand].name ? "" : "hidden"} border py-2`}>
                                <ul className='divide-y'>
                                    {Object.keys(brands[brand].model).map((model, index) => {
                                        // console.log(brands[brand].model[model].name.split(" ").join("-").toLowerCase())
                                        return (
                                            <li key={index}> <Link className='py-2 hover:font-semibold cursor-pointer' key={index} href={"/" + brands[brand].name.toLowerCase() + "/" + brands[brand].model[model].name.split(" ").join("-").toLowerCase() + "/"}><a >{brands[brand].name + " " + brands[brand].model[model].name}</a></Link></li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className={`absolute z-20 md:flex px-[10%] w-full bg-black text-white text-sm justify-around hidden md:${isHover2}`}>
                <div className='grid grid-cols-1  text-lg font-mono text-white font-thin my-6 py-4 '>
                    <p className='font-bold border-b border-white mb-2'>Collection</p>
                    <div className='grid grid-cols-1  text-gray-300 pl-3'>
                        <ul className='mr-4'>
                            {Object.keys(trendingCategory).map((index) => {
                                return (
                                    <li className=' cursor-pointer text-sm font-thin hover:text-yellow-500 mb-[0.5em]' key={index} >{trendingCategory[index][1].name}</li>)
                            })}
                            <li className=' cursor-pointer text-xs font-thin hover:text-yellow-500 '>&amp; Many more...</li>
                        </ul>
                    </div>
                </div>
                <div className='block w-[80%] py-2 border-l-2 pl-6 my-8'>
                    <p className='text-xl font-semibold pb-6 font-mono text-white  w-auto mb-1'>
                        Most Trending...
                    </p>
                    <div className='grid grid-cols-4 gap-3'>
                        {Object.keys(trending).map((index) => {
                            return (
                                <div className='hover:border-b-4 hover:border-l-4 border-white ' key={index}>
                                    <img src={trending[index][1].logo} alt="" />
                                </div>)
                        })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Navbar