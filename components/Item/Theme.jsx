import React, { useState, useEffect } from 'react'
import ItemComponent from './ItemComponent'
import { theme } from '../../data/design'
// import { mobile } from '../../pages/api/mobile'
import { useContext } from 'react'
import { Cart } from '../../data/Cart'
import { ItemContext } from '../../context/Itemcontext'
function Theme(props) {
    const ShownItem = useContext(ItemContext)
    const [baba, setBaba] = useState('hidden');
    const [skine, setSkine] = useState(props.mobile[props.model]?.model[props.design.split("-").join(" ")]?.skin[props.itemview]);
    useEffect(() => {
        setSkine(props.mobile[props.model]?.model[props.design.split("-").join(" ")]?.skin[props.itemview])
    }, [props.query]);
    // console.log(ShownItem)
    console.log(skine + 1)
    // console.log(props.design?.split("-").join(" "))
    // console.log(props.mobile[props.model]?.model[props.design.split("-").join(" ")].skin[props.itemview])
    // console.log(props)
    return (
        <div className=' md:flex bg-gray-200  p-4'>
            <ItemComponent
                skin={skine} />
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
                                'image': skine, 'phone': skine?.split("/").splice(0, 6), 'skin': ShownItem.skin
                            }
                            ))
                                ; console.log(localStorage.getItem('cart'));
                            ShownItem.setCart((Cart.items.length))
                        }}>Add to Bag</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Theme