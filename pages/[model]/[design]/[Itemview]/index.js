import React from 'react'
import { useRouter } from 'next/router'
import Theme from '../../../../components/Item/Theme'
import Navbar from '../../../../components/Navbar'
import { Cart } from '../../../../data/Cart'

export default function Slug() {

    const { query } = useRouter()
    console.log(query.Model + "-" + query.Design + "-" + query.Itemview)
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(Cart.items))
    }
    return (
        <div>
            <Navbar />
            <Theme model={query.Model} design={query.Design} itemview={query.Itemview} query={query} />

        </div>
    )
}
