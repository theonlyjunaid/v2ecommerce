import React, { useState, useEffect } from 'react'
import ItemComponent from './ItemComponent'
import { theme } from '../../data/design'
import { mobile } from '../../data/mobilee'
import { useContext } from 'react'
import { Cart } from '../../data/Cart'
import { ItemContext } from '../../context/Itemcontext'
import Image from 'next/image';
import { useRouter } from 'next/router';

function Theme(props) {

    const ShownItem = useContext(ItemContext)
    const [baba, setBaba] = useState('hidden');
    const [skine, setSkine] = useState(ShownItem.skin.plain);
    const [buyNow, setBuyNow] = useState('Buy Now');
    useEffect(() => {
        setSkine(ShownItem.skin.plain)
    }, [ShownItem.skin.plain]);
    const router = useRouter()
    console.log(router.query.Itemview)
    // console.log(skine)
    // useEffect(() => {
    //     ShownItem.setPhone(mobile.Apple.model[props.model?.split('-').join(' ')]?.back); ShownItem.setSkin(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin)
    // }, [props.model]);

    // console.log(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin)
    // console.log(props.model?.split('-').join(' '))
    return (
        <div className=' md:flex bg-gray-200  p-4'>

            <ItemComponent
                // image={ShownItem.image} phone={ShownItem.phone}
                skin={skine} />
            <div>
                {/* <div>
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

                </div> */}
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

                                                    // console.log(skine?.split("/").splice(0, 6).join('/') + '/' + item.name.toLowerCase() + '.png')
                                                    return (
                                                        <div className=' ' key={index}>
                                                            <img src={item.URL} alt="" onClick={() => setSkine(skine?.split("/").splice(0, 6).join('/') + '/' + item.name.toLowerCase() + '.png')} className='w-[50px] h-[50px]' />

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
                <div className='mt-1  gap-5'>

                    <div>
                        <h1 className='px-3 py-1 bg-gray-300 cursor-pointer text-center' onClick={() => {
                            localStorage.setItem('cart', Cart.items.push({
                                'image': ShownItem.image, 'phone': skine, 'skin': ShownItem.skin
                            }
                            ))
                                ; console.log(localStorage.getItem('cart'));
                            ShownItem.setCart((Cart.items.length))
                        }}>Add to Bag</h1>
                    </div>
                    {/* <div>
                        <h1 className='px-3 py-1 bg-gray-300 hover:bg-green-500 cursor-pointer w-[200px]'
                            onClick={() => {

                                localStorage.setItem('cart', JSON.stringify(Cart.items.push({
                                    ShownItem
                                }
                                )))
                                    ; console.log(Cart.items)
                                setBuyNow('Purchased')

                            }}>{buyNow}</h1>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Theme