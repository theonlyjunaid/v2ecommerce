import React, { useState, useEffect } from 'react'
import ItemComponent from './ItemComponent'
import { theme } from '../../data/design'
import { mobile } from '../../data/mobile'
import { useContext } from 'react'
import { Cart } from '../../data/Cart'
import { ItemContext } from '../../context/Itemcontext'
import Image from 'next/image';

function Theme(props) {

    const ShownItem = useContext(ItemContext)
    const [baba, setBaba] = useState('hidden');
    const [buyNow, setBuyNow] = useState('Buy Now');

    useEffect(() => {
        ShownItem.setPhone(mobile.Apple.model[props.model?.split('-').join(' ')]?.back); ShownItem.setSkin(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin)
    }, [props.model]);

    // console.log(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin)
    // console.log(props.model?.split('-').join(' '))
    return (
        <div className=' md:flex bg-gray-200  p-4'>

            <ItemComponent image={ShownItem.image} phone={ShownItem.phone} skin={ShownItem.skin} />
            <div>
                <div>
                    {
                        Object.keys(mobile).map((mobi, index) => {

                            return (
                                <div key={index} className='flex'>
                                    <div>
                                        <div>
                                            <p className='text-2xl font-semibold my-1' onClick={() => baba === mobi ? '' : setBaba(mobi)}>{mobi}</p>

                                            <div>
                                                {
                                                    Object.keys(mobile[mobi].model).map((mobi2, index2) => {
                                                        return (
                                                            <div key={index2} className={baba === mobi ? '' : 'hidden'}>
                                                                <p onClick={() => {
                                                                    ShownItem.setPhone(mobile[mobi].model[mobi2].back)
                                                                    ShownItem.setSkin(mobile[mobi].model[mobi2].skin)
                                                                }} className='bg-gray-400 cursor-pointer'>{mobile[mobi].model[mobi2].name}</p>
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
                                                            <Image src={item.URL} alt="" onClick={() => ShownItem.setImage(item.URL)} height={50} width={50} />
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
                <div className='mt-1 grid grid-cols-2 gap-5'>

                    <div>
                        <h1 className='px-3 py-1 bg-gray-300 cursor-pointer w-[200px]' onClick={() => {
                            localStorage.setItem('cart', JSON.stringify(Cart.items.push({
                                ShownItem
                            }
                            )))
                                ; console.log(Cart.items)
                        }}>Add to Cart</h1>
                    </div>
                    <div>
                        <h1 className='px-3 py-1 bg-gray-300 hover:bg-green-500 cursor-pointer w-[200px]'
                            onClick={() => {

                                localStorage.setItem('cart', JSON.stringify(Cart.items.push({
                                    ShownItem
                                }
                                )))
                                    ; console.log(Cart.items)
                                setBuyNow('Purchased')

                            }}>{buyNow}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme