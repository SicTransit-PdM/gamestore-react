import { useState } from 'react'

const ItemCount = ({onChangeCount}) =>{
    const [value, setValue] = useState(0)
    const [onCart, setOnCart] = useState(false)

    const handlerAddCount = () =>{
        onChangeCount(value+1)
        setValue(value+1)
        setOnCart(true)
    }
    const handlerSubstractCount = () =>{
        setValue(value-1)
        onChangeCount(value-1)
        setOnCart(false)
    }
    return(
        
        onCart 
        ? <button type="button" className="btn btn-warning rounded-pill btn-agregar" onClick={() => handlerSubstractCount()}>Quitar del Carrito</button>
        : <button type="button" className="btn btn-success rounded-pill btn-agregar" onClick={() => handlerAddCount()}>Agregar al Carrito</button> 
        // <div>
        //     <h4>Agregar Item</h4>
        //     <button onClick={() => handlerSubstractCount()}>-</button>
        //     <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
        //     <button onClick={() => handlerAddCount()}>+</button>
        // </div>
    )
}

export default ItemCount