import Cart from './../Cart'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

	const { count } = useContext(CartContext)
    return(
    <div className="order-lg-2 me-5">
        <button type="button" className="btn position-relative dropdown-toggle" id="btn-carrito" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-cart text-light fs-4"/>
			{
				count!= 0 && <span className="position-absolute top-0 start-90 translate-middle-x badge bg-secondary text-light rounded-pill">{count}</span>
			}
        </button>
		<Cart />
    </div>
    )
}

export default CartWidget