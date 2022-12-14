import React, { createContext, useReducer } from "react"
import { initialState, CardReducer } from '../../data/reducers/CardReducer'

export const CartContext = createContext(initialState);

export default function CartProvider(props) {

    const [cardState, cardDispatch] = useReducer(CardReducer, initialState)



    return (
        <CartContext.Provider value={[cardState, cardDispatch]}>

            {props.children}

        </CartContext.Provider>
    )

    

}