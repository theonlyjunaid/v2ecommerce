import { ItemContext } from "./Itemcontext";
import { useContext, useState } from "react";
import { Cart } from "../data/Cart";
import { mobile } from "../data/mobilee";

export const ItemState = (props) => {
    // console.log(mobile.Apple.model["iphone 14 pro max"].skin.green);
    // const initialState = {
    //     items: [
    //         { id: 1, name: "Bread", price: 50 },
    //         { id: 2, name: "Egg", price: 30 },
    //         { id: 3, name: "Milk", price: 40 },
    //         { id: 4, name: "Butter", price: 60 }
    //     ]
    // }

    // const [state, setState] = useState(initialState);
    const [phone, setPhone] = useState(mobile.apple.model["iphone 14 pro max"].skin.plain);
    const [skin, setSkin] = useState(mobile.apple.model["iphone 14 pro max"].skin.plain);
    const [cart, setCart] = useState(Cart.items.length === 0 ? [] : Cart.items.length);

    // const [state, dispatch] = useReducer(ItemReducer, initialState);

    // // Actions
    // const addItem = (item) => {
    //     dispatch({
    //         type: "ADD_ITEM",
    //         payload: item
    //     });
    // }

    // const deleteItem = (id) => {
    //     dispatch({
    //         type: "DELETE_ITEM",
    //         payload: id
    //     });
    // }

    return (
        <ItemContext.Provider
            value={{ phone, setPhone, skin, setSkin, cart, setCart }}
        >
            {props.children}
        </ItemContext.Provider>
    );
}