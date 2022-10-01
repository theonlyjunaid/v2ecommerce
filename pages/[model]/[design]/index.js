import React from 'react'
import { useRouter } from 'next/router'
// import Footer from '../../components/Footer'
import Theme from '../../../components/Item/Theme'
import Navbar from '../../../components/Navbar'
import { Cart } from '../../../data/Cart'
import Carte from '../../../components/Carte'
import { useContext } from 'react'
import { ItemContext } from '../../../context/Itemcontext'
export default function Slug() {

    const { query } = useRouter()
    console.log(Cart.items)
    //save to local storage
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(Cart.items))
    }

    // console.log(query)
    // console.log(fileId)
    return (
        <div>
            <Navbar />
            <Theme model={query.Design} />
            <div>
                <Carte />
            </div>

        </div>
    )
}
