import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const CartItem = ({item}) =>{
    const {removeItem} = useContext(CartContext)
    
    const handlerRemoveItem = (item) =>{
        removeItem(item)
    }
    return(
            <div className="row g-0 border border-1 border-primary">
                <div className="col-md-4 px-md-0">
                    <img src={item.img} height="90" width="175" className="ms-1 rounded-start" alt="img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-light">
                        <Link to='/item/'>
                            <h5 className="card-title text-warning fw-bold">{item.title}</h5>
                        </Link>
                        <button type="button" className="btn btn-link btn-sm" onClick={() => handlerRemoveItem(item)}>Quitar</button>
                    </div>
                </div>
            </div>
    )
}

export default CartItem