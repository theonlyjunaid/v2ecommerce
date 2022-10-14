import React from 'react'
import { useRouter } from 'next/router'
import Theme from '../../../../components/Item/Theme'
import Navbar from '../../../../components/Navbar'
import { Cart } from '../../../../data/Cart'

export default function Slug({ mobile }) {
    const { query } = useRouter()
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(Cart.items))
    }
    return (
        <div>
            <Navbar />
            <Theme mobile={mobile} model={query.model} design={query.design} itemview={query.Itemview} query={query} />

        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
    const mobile = await res.json()
    return {
        props: {
            mobile
        }
    }
}
