import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar'
import { mobile } from '../../../data/mobilee'
import Link from 'next/link'

function Index() {
    const router = useRouter();
    const [rola, setRola] = useState('apple')
    const [design, setDesign] = useState('iphone 14')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.Model)
        setDesign(router.query.Design.split("-").join(" "))

    }, [router.query]);
    console.log(rola)
    return (
        <div>
            <Navbar />
            <div className='flex'>
                {
                    design && Object.keys(mobile[rola]?.model[design]?.skin).map((item, index) => {
                        console.log(item)
                        console.log(mobile[rola].name.toLowerCase().split(" ").join("-") + "/" + design.toLocaleLowerCase().split(" ").join("-") + "/" + item.toLocaleLowerCase().split(" ").join("-"))
                        let destination = "/" + mobile[rola].name.toLowerCase().split(" ").join("-") + "/" + design.toLocaleLowerCase().split(" ").join("-") + "/" + item.toLocaleLowerCase().split(" ").join("-")
                        let jadu = mobile[rola]?.model[design]?.skin;
                        return (
                            <Link href={destination} key={index + jadu[item]}><a> <div className='flex justify-around mt-10'>

                                <img src={jadu[item]} alt="" className='w-[280px]' />
                            </div>
                            </a></Link>
                        )
                    })
                }</div>
        </div>
    )
}

export default Index