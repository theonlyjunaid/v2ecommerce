import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
// import { mobile } from '../../data/mobilee'
// import mobile from '../api/mobile'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Index({ mobile }) {
    //get the mobile content from the api
    const [mobileContent, setMobileContent] = useState(mobile)
    // console.log(mobileContent.hola)

    const router = useRouter();
    const [rola, setRola] = useState('')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.Model)
    }, [router.isReady]);
    return (
        <div>
            <Navbar />
            <div className='flex justify-around mt-10'>
                {
                    rola && Object.keys(mobile[rola]?.model).map((item, index) => {
                        return (
                            <Link href={`/${rola}/${item.toLocaleLowerCase().split(" ").join("-")}`} key={index}><a >
                                <div>
                                    <img src={mobile[rola].model[item]?.skin['plain']} alt="" className='w-[280px]' />
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
export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/mobile')
    const mobile = await res.json()
    return {
        props: {
            mobile
        }
    }
}
