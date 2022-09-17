import React from 'react'
import { useRouter } from 'next/router'
// import Footer from '../../components/Footer'

import Theme from '../../../components/Item/Theme'
import Navbar from '../../../components/Navbar'

export default function slug() {
    const { query } = useRouter()
    console.log(query.design)
    // console.log(fileId)
    return (
        <div>
            <Navbar />
            <Theme model={query.design} />
            {/* <Footer /> */}
        </div>
    )
}
