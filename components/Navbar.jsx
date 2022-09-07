import React, { useState } from 'react'
import { brands, categories } from '../data/navbar';



function Navbar() {

    const trending = Object.entries(categories).slice(0, 4)
    const trendingCategory = Object.entries(categories).slice(0, 7)

    const num1 = [1, 2, 3, 4, 5, 6, 7, 8]
    const [isHover, setIsHover] = useState("hidden");
    const [isHover2, setIsHover2] = useState("hidden");
    const [isHover3, setIsHover3] = useState("hidden");
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
        <div className=''
            onMouseLeave={() => {
                setIsHover("hidden")
                setIsHover2("hidden")
                setIsHover3("hidden")
            }}

        >
            <nav className='flex justify-between md:px-4 lg:px-8 items-center py-3 bg-black text-white border-b border-gray-300 font-mono'>
                <div className='text-5xl'>
                    <h1 className='md-ml-2 lg:ml-5'>MZArt</h1>
                </div>
                <div className='flex text-sm lg:text-base xl:text-xl font-semib'>
                    <div className='item-center'
                        onMouseEnter={() => setIsHover(show)}
                        onClick={() => setIsHover(show)}
                    >
                        <a href='#' className='px-2  lg:px-4'>Select Device <i className='bx bx-chevron-down'></i></a>

                    </div>
                    <div className='item-center'
                        onMouseEnter={() => setIsHover2(show2)}
                        onClick={() => setIsHover2(show2)}>
                        <a href='#' className='px-2 lg:px-4'>Skin Collection <i className='bx bx-chevron-down '></i></a>
                    </div>

                    <div>
                        <a href='#' className='px-2 lg:px-4'>FAQs</a>
                    </div>
                    <div>
                        <a href='#' className='px-2 lg:px-4'>Device Not Found</a>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5  text-xl'>
                    <i className='bx bx-search'></i>
                    <i className='bx bx-user'></i>
                    <i className='bx bx-cart-alt' ></i>
                </div>
            </nav >
            <div className={`absolute grid grid-cols-4 gap-6 p-8 px-[11%] w-full text-white text-sm iten ${isHover} bg-black`}
                onMouseLeave={() => setIsHover3("hidden")}
            >
                {Object.keys(brands).map((brand) => {

                    return (
                        <div className='flex'
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
                            <div className={`absolute bg-black text-lg font-mono font-thin px-6 w-[19%]  mt-[3.6%] ${isHover3 === brands[brand].name ? "" : "hidden"} border py-2`}>
                                <ul className='divide-y'>
                                    {Object.keys(brands[brand].model).map((model) => {
                                        return (
                                            <li className='py-2 hover:font-semibold cursor-pointer'>{brands[brand].name + " " + brands[brand].model[model].name}</li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className={`absolute flex px-[10%] w-full bg-black text-white text-sm justify-around ${isHover2}`}>
                <div className='grid grid-cols-1  text-lg font-mono text-white font-thin my-6 py-4 '>
                    <p className='font-bold border-b border-white mb-2'>Collection</p>
                    <div className='grid grid-cols-1  text-gray-300 pl-3'>
                        <ul className='mr-4'>
                            {Object.keys(trendingCategory).map((index) => {
                                return (
                                    <li className=' cursor-pointer text-sm font-thin hover:text-yellow-500 mb-[0.5em]'  >{trendingCategory[index][1].name}</li>)
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
                                <div className='hover:border-b-4 hover:border-l-4 border-white '>
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