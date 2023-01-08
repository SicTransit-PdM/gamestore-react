import { createContext, useState } from 'react'

export const CartContext = createContext(null)


export const CartContextProvider = ({children}) => {
    const [ cart, setCart] = useState([])
    const [ count, setCount ] = useState(0)
    const [ total, setTotal ] = useState(0)

    function addToCart(item){
        if(cart.includes(item) == false){
            console.log(`Added: ${item.title}`, item)
            setCart([...cart, item])
            setCount(count + 1)
            setTotal( total + item.price)
        }
    }
    function removeItem(item){
        if(cart.some(p => p.title == item.title)){
            console.log(`Removed: ${item.title}`, item)
            let itemIndex = cart.findIndex(p => p.title == item.title)
            const newCart = [...cart]
            newCart.splice(itemIndex, 1)
            setCart(newCart)
            setCount(count - 1)
            setTotal(total - item.price)
        }
    }

    function clear(){
        setCart([])
        setCount(0)
        setTotal(0)
    }

    return(
        <CartContext.Provider 
        value={{
            cart,
            count,
            total,
            setCart,
            addToCart,
            removeItem,
            clear,
        }}
        >
            {children}
        </CartContext.Provider>
    )

}