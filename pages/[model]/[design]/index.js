import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar'
// import { mobile } from '../../../data/mobilee'
// import { mobile } from '../../api/mobile'
import Link from 'next/link'

function Index({ mobile }) {

    const router = useRouter();
    const [rola, setRola] = useState('apple')
    const [design, setDesign] = useState('iphone 14')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.model)
        setDesign(router.query.design?.split("-").join(" "))

    }, [router.query]);
    // console.log(mobile)
    return (
        <div className='bg-slate-900 h-screen'>
            <Navbar />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-4 p-8'>
                {
                    design && Object.keys(mobile[rola]?.model[design]?.skin).map((item, index) => {
                        // console.log(item)
                        // console.log(mobile[rola].name.toLowerCase().split(" ").join("-") + "/" + design.toLocaleLowerCase().split(" ").join("-") + "/" + item.toLocaleLowerCase().split(" ").join("-"))
                        let destination = "/" + mobile[rola].name.toLowerCase().split(" ").join("-") + "/" + design.toLocaleLowerCase().split(" ").join("-") + "/" + item.toLocaleLowerCase().split(" ").join("-")
                        let jadu = mobile[rola]?.model[design]?.skin;
                        return (
                            <Link href={destination} key={index + jadu[item]}><a> <div className='grid grid-cols-1 place-items-center  bg-gray-400'>

                                <img src={jadu[item]} alt="" className='w-[280px]' />
                                <div className='text-white hover:text-yellow-400 text-lg sm:text-2xl my-2'>
                                    {item.split("")[0].toUpperCase() + item.slice(1)}
                                </div>
                            </div>
                            </a></Link>
                        )
                    })
                }</div>
        </div>
    )
}

export default Index

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
    const mobile = await res.json()
    return {
        props: {
            mobile
        }
    }
}
