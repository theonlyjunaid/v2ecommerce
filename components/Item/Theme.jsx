import React, { useState, useEffect } from 'react'
import ItemComponent from './ItemComponent'
import { theme } from '../../data/design'
import { mobile } from '../../data/mobile'

function Theme() {
    const [baba, setBaba] = useState('hidden');
    const [phone, setPhone] = useState("");
    const [skin, setSkin] = useState("");
    const [image, setImage] = useState('https://cdn.shopify.com/s/files/1/0602/9334/9613/files/01-01_600x.jpg');
    useEffect(() => {
        setPhone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setSkin('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647')
    }, []);
    return (
        <div className=' md:flex bg-gray-200  p-4'>

            <ItemComponent image={image} phone={phone} skin={skin} />
            <div>
                <div>
                    {
                        Object.keys(mobile).map((mobi, index) => {

                            return (
                                <div key={index} className='flex'>
                                    <div>
                                        <div>
                                            <p className='text-2xl font-semibold my-1' onClick={() => baba === mobi ? '' : setBaba(mobi)}>{mobi}</p>
                                        </div>
                                        <div>
                                            {
                                                Object.keys(mobile[mobi].model).map((mobi2, index2) => {
                                                    return (
                                                        <div key={index2} className={baba === mobi ? '' : 'hidden'}>
                                                            <p onClick={() => {
                                                                setPhone(mobile[mobi].model[mobi2].back)
                                                                setSkin(mobile[mobi].model[mobi2].skin)
                                                            }} className='bg-gray-400 cursor-pointer'>{mobile[mobi].model[mobi2].name}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {/* {mobile[mobi].map((model, index) => {
                                                return (
                                                    <div key={index} className='flex'>
                                                        <p>{model}</p>
                                                    </div>
                                                )
                                            })} */}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }

                </div>
                <div className='border border-black max-h-[300px] overflow-y-scroll'>
                    <h1 className='text-3xl  font-semibold mx-2'>Customize Skin</h1>
                    <div className=''>
                        {
                            Object.keys(theme).map((item, index) => {
                                return (
                                    <div className='my-4 mx-2' key={index}>
                                        <h1 className='text-2xl font-mono font-semibold'>{item}</h1>
                                        <div className='grid grid-cols-4 gap-6'>
                                            {
                                                theme[item].map((item, index) => {
                                                    return (
                                                        <div className='w-[50px] ' key={index}>
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
        </div>
    )
}

export default Theme