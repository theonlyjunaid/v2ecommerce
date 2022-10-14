import React, { useEffect, useState } from 'react'
import { Cart } from '../../data/Cart'
import Image from 'next/image'
import Link from 'next/link'

function CartItem() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("localTasks")) {
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            console.log(storedList)
            setTasks(storedList);
        }
    }, [])
    const handleDelete = (task) => {
        const deleted = tasks.filter((t) => t !== task);
        setTasks(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    }

    // console.log(tasks.splice(0, 1))
    // console.log(tasks[0]?.phone[3] + " " + tasks[0]?.phone[5])
    // console.log(tasks[0]?.skin.design.split("-").join(" "))


    // console.log(localStorage.getItem("localTasks"))
    return (
        <div className='md:flex mt-10 justify-center'>
            <div className='grid grid-cols-1 w-[80%] xl:max-w-[800px] mx-10'>

                {
                    tasks.map((task, index) => {

                        return (
                            <div key={index} className='flex items-center border-b-2 py-[24px]' >
                                <div className='flex flex-col justify-center items-center relative w-[240px] h-[240px]'>
                                    <Image
                                        src={task.image}
                                        layout='fill'
                                        objectFit='contain'
                                        alt="Picture of the Skin"
                                    />
                                </div>
                                <div>
                                    <div className='md:text-xl ml-3 md:ml-10 '>
                                        <p onClick={() => { handleDelete(task) }}>dlete em</p>
                                        <p className='font-mono flex items-center'>{task?.skin?.design.split("-").join(" ")} </p>
                                        <p className='font-thin text-gray-400 my-[5px]'>{task?.skin?.itemview}</p>
                                        <p className='font-thin text-gray-400 my-[5px]'>{''}</p>
                                        <p className='font-mono'>Quantity - 1</p>
                                        <div>
                                            <p className='font-mono'>Price - $ 999</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}

            </div>

            {/* <div className='  w-[80%] xl:max-w-[800px] mx-10 '>

                {(Cart.items).map((item, index) => {
                    // console.log(item[3])
                    return (
                        <div key={index} className='flex items-center border-b-2 py-[24px]'>
                            <div className='w-[150px] h-[150px] border rounded-lg border-black flex justify-center items-center'>
                                <img src={item.image} alt="Cinque Terre" className='h-[130px]' />
                            </div>
                            <div className='md:text-xl ml-3 md:ml-10 '>
                                <p className='font-mono flex items-center'>iPhone 12 - Black Fluid </p>
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
            </div > */}
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