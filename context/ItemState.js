import { ItemContext } from "./Itemcontext";
import { useContext, useState } from "react";
import { Cart } from "../data/Cart";
import { mobile } from "../data/mobile";
export const ItemState = (props) => {

    // const initialState = {
    //     items: [
    //         { id: 1, name: "Bread", price: 50 },
    //         { id: 2, name: "Egg", price: 30 },
    //         { id: 3, name: "Milk", price: 40 },
    //         { id: 4, name: "Butter", price: 60 }
    //     ]
    // }

    // const [state, setState] = useState(initialState);
    const [phone, setPhone] = useState(mobile.Apple.model[props.model?.split('-').join(' ')]?.back);
    const [skin, setSkin] = useState(mobile.Apple.model[props.model?.split('-').join(' ')]?.skin);
    const [image, setImage] = useState('');
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
            value={{ phone, setPhone, skin, setSkin, image, setImage, cart, setCart }}
        >
            {props.children}
        </ItemContext.Provider>
    );
}