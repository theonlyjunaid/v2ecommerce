import React, { useState, useEffect } from 'react'
import ItemComponent from './ItemComponent'
import { theme } from '../../data/design'
import { mobile } from '../../data/mobile'
import Image from 'next/image';

function Theme(props) {
    const [baba, setBaba] = useState('hidden');
    const [phone, setPhone] = useState(mobile.Apple.model[props.model?.split('-').join(' ')]?.back);
    const [skin, setSkin] = useState(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin);
    useEffect(() => {
        setPhone(mobile.Apple.model[props.model?.split('-').join(' ')]?.back); setSkin(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin)
    }, [props.model]);
    const [image, setImage] = useState('');

    // console.log(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin)
    // console.log(props.model?.split('-').join(' '))
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
                                                            <Image src={item.URL} alt="" onClick={() => setImage(item.URL)} height={50} width={50} />
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
            <button className='mx-4 px-4 bg-green-500 max-h-[25px] items-center' onClick={() => {
                console.log(image)
                console.log(phone)
                console.log(skin)
            }}>hello </button>

        </div>
    )
}

export default Theme