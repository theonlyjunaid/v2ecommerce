import React from 'react'
import CartItem from '../components/Cart/CartItem'
import Navbar from '../components/Navbar'

function cart() {
    return (
        <div>
            <Navbar />
            <CartItem />
        </div>
    )
}

export default cart