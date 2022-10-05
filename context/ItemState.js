import { ItemContext } from "./Itemcontext";
import { useContext, useState } from "react";
import { Cart } from "../data/Cart";
import { mobile } from "../data/mobilee";

export const ItemState = (props) => {
    const [phone, setPhone] = useState('');
    const [skin, setSkin] = useState('');
    const [cart, setCart] = useState(Cart.items.length === 0 ? [] : Cart.items.length);

    return (
        <ItemContext.Provider
            value={{ phone, setPhone, skin, setSkin, cart, setCart }}
        >
            {props.children}
        </ItemContext.Provider>
    );
}