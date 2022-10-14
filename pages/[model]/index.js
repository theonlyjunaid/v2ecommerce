import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
// import { mobile } from '../../data/mobilee'
import mobile from '../api/mobile'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Index({ mobile }) {
    // console.log(mobile.json())
    //get the mobile content from the api
    // const [mobileContent, setMobileContent] = useState(mobile)
    // console.log(mobileContent.hola)
    //get the router


    const router = useRouter();
    const [rola, setRola] = useState('')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.model)
    }, [router.isReady]);
    console.log(mobile)
    console.log(rola)
    return (
        <div className='bg-slate-900 h-screen'>
            <Navbar />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-8 '>
                {
                    rola && Object.keys(mobile[rola]?.model).map((item, index) => {
                        return (
                            <Link href={`/${rola}/${item?.toLocaleLowerCase().split(" ").join("-")}`} key={index}><a >
                                <div className='bg-gray-500 grid grid-cols-1 gap-4 place-items-center  relative'>
                                    <img src={mobile[rola]?.model[item]?.skin['plain']} alt="" className='w-[280px] relative -top-0' />
                                    <div className='text-white text-2xl mb-5 hover:text-yellow-500'>{item}</div>
                                </div>
                            </a>
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}


export default Index

//get serverside props
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
    const mobile = await res.json()
    return {
        props: {
            mobile
        }
    }

}
