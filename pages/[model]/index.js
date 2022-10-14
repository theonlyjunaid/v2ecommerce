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

    const [show, setShow] = useState('hidden')

    const router = useRouter();
    const [rola, setRola] = useState('')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.model)
    }, [router.isReady]);
    console.log(mobile)
    console.log(rola)
    return (
        <div className=''>
            <Navbar />
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>{mobile[rola]?.name} Models</div>
            {/* <div className='flex sm:text-xl md:text-2xl lg:text-3xl font-mono items-center px-4 sm:px-10 justify-center md:justify-start'><div className='hidden sm:flex'> Select Your Design or </div> <Link href={"/" + router.query.model + "/" + router.query.design + "/" + "plain"}><a><div className='font-semibold bg-yellow-300 px-3 sm:bg-gray-300 md:px-2 py-1 md:py-2 rounded-2xl ml-2 hover:bg-yellow-400'>Start the Customizer</div></a></Link></div> */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   '>
                {
                    rola && Object.keys(mobile[rola]?.model).map((item, index) => {
                        return (
                            <Link href={`/${rola}/${item?.toLocaleLowerCase().split(" ").join("-")}`} key={index}><a >
                                <div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
                                    onMouseEnter={() => setShow(item)}
                                    onMouseLeave={() => setShow('')}
                                >
                                    <img src={mobile[rola]?.model[item]?.skin['plain']} alt="" className='w-[280px] relative -top-0' />
                                    <div className={`sm:absolute bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl md:${show === item ? '' : 'hidden'}`}>
                                        <div className='text-mono'>{mobile[rola]?.name}</div>
                                        <div>{mobile[rola]?.model[item]?.name}</div>
                                    </div>
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
