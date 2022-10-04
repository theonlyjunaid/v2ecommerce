// import React from 'react'
// // import { useRouter } from 'next/router'
// import Navbar from '../../components/Navbar'
// import { mobile } from '../../data/mobilee'
// import Populated from '../../components/PopulatedItem/Populated'
// import { theme } from '../../data/design'



// function index() {
//     // console.log(theme.Satrang[0].URL)
//     // const { query } = useRouter()
//     // console.log(query.model)
//     // console.log(mobile.Samsung.model['S20 Ultra'].back)
//     return (
//         <>
//             <Navbar />
//             <div className=''>
//                 {
//                     Object.keys(theme).map((item, index) => {
//                         return (

//                             <div className='grid grid-cols-2  ' key={index}>
//                                 {
//                                     theme[item].map((item, index) => {
//                                         return (
//                                             <div key={index + 'jadi'} className=''>
//                                                 <Populated image={item.URL} phone={mobile.Samsung?.model['S22 Ultra'].back} skin={mobile.Samsung?.model['S20 Ultra'].skin} />
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>

//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// export default index
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { mobile } from '../../data/mobilee'
import Link from 'next/link'
import { useRouter } from 'next/router'

function index() {
    // console.log(mobile.Apple.model['iphone 14 pro max'].skin)
    // let { query } = useRouter()
    // console.log(a.query.Model?.split("").shift().toUpperCase() + a.query.Model?.slice(1))
    // let c = mobile[b]?.model
    // let d = c = !undefined ? c : "hola";
    // const [model, setModel] = useState('')
    // useEffect(() => {
    //     setModel(d)
    // }, [100])
    // const hola = async () => {
    //     const c = await mobile[a]?.model
    //     console.log(c)
    // }
    const router = useRouter();
    const [rola, setRola] = useState('apple')
    useEffect(() => {
        if (!router.isReady) return;
        setRola(router.query.Model)
        // let a = router.query.Model;
        // codes using router.query
        // console.log(router.query.Model)
        // console.log(query?.Model)
    }, [router.isReady]);
    // console.log(rola)
    return (
        <div>
            <Navbar />
            <h1>{''}</h1>
            <div className='flex justify-around mt-10'>
                {/* <img src={mobile.Apple.model['iphone 14 pro max'].skin.plain} alt="" className='w-[280px]' /> */}
                {/* <img src={mobile.Apple.model['iphone 14 pro max'].skin.plain} alt="" className='w-[280px] ' />
                <img src={mobile.Apple.model['iphone 14'].skin.plain} alt="" className='w-[280px]' /> */}
                {
                    Object.keys(mobile[rola]?.model).map((item, index) => {
                        console.log(item.toLocaleLowerCase().split(" ").join("-"))
                        return (
                            <Link href={`/${rola}/${item.toLocaleLowerCase().split(" ").join("-")}`}><a >
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

export default index