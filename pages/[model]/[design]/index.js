import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar'
import { mobile } from '../../../data/mobilee'

function Index() {
    const router = useRouter();
    const [rola, setRola] = useState('')
    const [design, setDesign] = useState('')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.Model)
        setDesign(router.query.Design.split("-").join(" "))

    }, [router.isReady]);
    return (
        <div>
            <Navbar />
            <div className='flex'>
                {
                    design && Object.keys(mobile[rola]?.model[design]?.skin).map((item, index) => {
                        console.log(item)
                        let jadu = mobile[rola]?.model[design]?.skin;
                        return (
                            <div className='flex justify-around mt-10' key={index}>

                                <img src={jadu[item]} alt="" className='w-[280px]' />
                            </div>
                        )
                    })
                }</div>
        </div>
    )
}

export default Index