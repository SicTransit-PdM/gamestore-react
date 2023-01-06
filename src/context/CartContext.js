import { createContext, useReducer } from 'react'
import { CartReducer } from './CartReducer' 

export const CartContext = createContext(null)

const initialState = {
    count: 0,
    item: {},
    cart: [],
    total: 0,
}

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    function addCount(count, item){
        dispatch({
            type: 'ADD_ITEM',
            payload: {count, item}
        })
    }

    return(
        <CartContext.Provider 
        value={{
            count: state.count,
            item: state.item,
            cart: state.cart,
            total: state.total,
            addCount,
        }}
        >
            {children}
        </CartContext.Provider>
    )

}