import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

// const ItemCount = ({onChangeCount, item}) =>{
const ItemCount = ({item}) =>{


    const {cart, addToCart, removeItem} = useContext(CartContext)
    
    const [onCart, setOnCart] = useState(cart.some(p => p.title == item.title))
    
    // const [value, setValue] = useState(0)
    // const handlerAddCount = () =>{
    //     onChangeCount(value+1)
    //     setValue(value+1)
    //     setOnCart(true)
    // }
    // const handlerSubstractCount = () =>{
    //     setValue(value-1)
    //     onChangeCount(value-1)
    //     setOnCart(false)
    // }

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
        // ? <button type="button" className="btn btn-warning rounded-pill btn-agregar" onClick={() => handlerSubstractCount()}>Quitar del Carrito</button>
        // : <button type="button" className="btn btn-success rounded-pill btn-agregar" onClick={() => handlerAddCount()}>Agregar al Carrito</button> 
        // <div>
        //     <h4>Agregar Item</h4>
        //     <button onClick={() => handlerSubstractCount()}>-</button>
        //     <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
        //     <button onClick={() => handlerAddCount()}>+</button>
        // </div>
    )
}

export default ItemCount