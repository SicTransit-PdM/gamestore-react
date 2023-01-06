import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemAdd = ({item}) =>{


    const {cart, addToCart, removeItem} = useContext(CartContext)
    
    const [onCart, setOnCart] = useState(cart.some(p => p.title == item.title))

    const handlerAddToCart = (item) =>{
        addToCart(item)
        setOnCart(true)
    }
    const handlerRemoveItem = (item) =>{
        removeItem(item)
        setOnCart(false)
    }
    return(
        
        onCart
        ? <button type="button" className="btn btn-warning rounded-pill btn-agregar" onClick={() => handlerRemoveItem(item)}>Quitar del Carrito</button>
        : <button type="button" className="btn btn-success rounded-pill btn-agregar" onClick={() => handlerAddToCart(item)}>Agregar al Carrito</button>
    )
}

export default ItemAdd