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