import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
// import { mobile } from '../../data/mobilee'
// import mobile from '../api/data/mobile'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Index({ mobile }) {
    const [show, setShow] = useState('hidden')

    const router = useRouter();
    const [rola, setRola] = useState('')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.model)
    }, [router.isReady]);
    console.log(mobile)

    return (
        <div className=''>
            <Navbar />
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>{mobile[rola]?.name} Models</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   '>
                {
                    rola && Object.keys(mobile[rola]?.model).map((item, index) => {
                        return (
                            <Link href={`/${rola}/${item?.toLocaleLowerCase().split(" ").join("-")}`} key={index}><a >
                                <div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
                                    onMouseEnter={() => setShow(item)}
                                    onMouseLeave={() => setShow('')}
                                >
                                    <img src={mobile[rola]?.model[item]?.skin['plain']} alt="" className='w-[260px] relative -top-0' />
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

//getstaticprops
export async function getStaticProps() {
    const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
    const mobile = await res.json()
    return {
        props: {
            mobile
        }
    }
}
//get static paths
export async function getStaticPaths() {
    const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
    const mobile = await res.json()
    const paths = Object.keys(mobile).map((item) => {
        return {
            params: {
                model: item
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}


//get serverside props
// export async function getServerSideProps(context) {
//     const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
//     const mobile = await res.json()
//     return {
//         props: {
//             mobile
//         }
//     }

// }
