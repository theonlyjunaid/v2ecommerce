import React from 'react'
import { Cart } from '../../data/Cart'
import Image from 'next/image'
import Link from 'next/link'

function CartItem() {
    return (
        <div className='md:flex mt-10 justify-center'>
            <div className='  w-[80%] xl:max-w-[800px] mx-10 '>
                <div className='text-3xl mt-1 mb-5'>Bag</div>
                {(Cart.items).map((item, index) => {
                    console.log(item[3])
                    return (
                        <div key={index} className='flex items-center border-b-2 py-[24px]'>
                            <div className='w-[150px] h-[150px] border rounded-lg border-black flex items-center'>
                                <img src={item.phone} alt="Cinque Terre" className='scale-[110%]' />
                            </div>
                            <div className='md:text-xl ml-3 md:ml-10 '>
                                <p className='font-mono flex items-center'>iPhone 12 - Black Fluid <img src={item.image} alt="" width={30} className='mx-1' /></p>
                                <p className='font-thin text-gray-400 my-[5px]'>Dark Collection</p>
                                <p className='font-thin text-gray-400 my-[5px]'>Dark Collection</p>
                                <p className='font-mono'>Quantity - 1</p>
                                <div>
                                    <p className='font-mono'>Price - $ 999</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div >
            <div className='md:w-[350px] mx-10 md:ml-10'>
                <div className='text-3xl mt-1 mb-5'>Order Summary</div>
                <div className='text-lg'>
                    <div className='flex justify-between px-5 py-2'>
                        <p className='font-mono'>Subtotal</p>
                        <p className='font-mono'>$ 999</p>
                    </div>
                    <div className='flex justify-between px-5 py-2'>
                        <p className='font-mono'>Shipping</p>
                        <p className='font-mono'>$ 0</p>
                    </div>
                    <div className='flex justify-between px-5 py-2'>
                        <p className='font-mono'>Tax</p>
                        <p className='font-mono'>$ 0</p>
                    </div>
                    <div className='flex justify-between px-5 py-3 border-t-2 border-b-2'>
                        <p className='font-mono'>Total</p>
                        <p className='font-mono'>$ 999</p>
                    </div>
                    <div>
                        <Link href="/checkout"><a><button className='bg-black hover:bg-gray-800 text-white w-full py-5 mt-5 rounded-[40px]'>Checkout</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem