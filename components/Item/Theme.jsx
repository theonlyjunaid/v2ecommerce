import React, { useState } from 'react'
import ItemComponent from './ItemComponent'
import { theme } from '../../data/design'

function Theme() {
    console.log(theme.DarkCollection[0].URL)
    const [image, setImage] = useState('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg');

    return (
        <div className=' md:flex bg-gray-200  p-4'>

            <ItemComponent image={image} />
            <div className='border border-black max-h-[300px] overflow-y-scroll'>
                <h1 className='text-3xl  font-semibold mx-2'>Customize Skin</h1>
                <div className=''>
                    {
                        Object.keys(theme).map((item) => {
                            return (
                                <div className='my-4 mx-2'>
                                    <h1 className='text-2xl font-mono font-semibold'>{item}</h1>
                                    <div className='grid grid-cols-4 gap-6'>
                                        {
                                            theme[item].map((item) => {
                                                return (
                                                    <div className='w-[50px] '>
                                                        <img src={item.URL} alt="" onClick={() => setImage(item.URL)} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Theme