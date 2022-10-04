import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { mobile } from '../../../data/mobilee'

function index() {
    const router = useRouter();
    const [rola, setRola] = useState('')
    const [design, setDesign] = useState('')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.Model)
        // let a = router.query.Model;
        // codes using router.query
        setDesign(router.query.Design.split("-").join(" "))
        // console.log(query?.Model)
    }, [router.isReady]);
    console.log(rola)
    console.log(design)
    return (
        <div>
            <Navbar />
            <div className='flex'>
                {
                    design && Object.keys(mobile[rola]?.model[design]?.skin).map((item, index) => {
                        // console.log(mobile.Apple.model[item].skin.plain)
                        console.log(item)
                        let jadu = mobile[rola]?.model[design]?.skin;
                        // console.log(jadu[item])
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

export default index