import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { peso } from '../../mock'
import CartItem from '../CartItem'

const Cart = () =>{

    const { count, cart, total, clear } = useContext(CartContext)
	// const totalPrice = cart.length > 0 ? cart.map((item) => 0 + item.price) : 0
    function verCarrito(){
        console.log('state cart', cart)
        console.log('state count', count)
        console.log('state total', total)
    }

	function handlerClear(){
		clear()
	}

    return(
        <div className="container w-50 dropdown-menu dropdown-menu-dark bg-dark dropdown-menu-end" aria-labelledby="btn-carrito">
			{ 
			count ? 
			<div className="d-flex justify-content-between align-items-center">
				<div className="mt-2 ms-5">
					<span className="text-muted">Tu carrito</span>
					<p>{count} items agregados</p>
				</div>
				<div className="d-flex align-items-center">
					<span className="me-4 lead">{peso.format(total)}</span>
					<Link to='/checkout' ><button className="btn btn-sm btn-success rounded-pill me-3 px-3">Comprar</button></Link>
					<button className='btn btn-sm btn-warning rounded-pill me-3 px-4' onClick={() => handlerClear()} >Vaciar</button>
				</div>
			</div>
			: 
			<div className="d-flex justify-content-between align-items-center">
				<div className="mt-2 ms-5">
					<span className="text-muted">Tu carrito</span>
					<p>No has agregado ningún producto al carrito</p>
				</div>
				<div className="d-flex align-items-center">
					<span className="me-4 lead"></span>
				</div>
			</div>
			}
			<div className="card mb-1 mx-lg-1 border border-primary bg-dark">
				{
					cart && cart.map((item, i) => {
						const newkey = `key-${item.title}`
						return(
							<CartItem key={newkey} item={item} />
						)
					})
				}
			</div>
		</div>
    )
}

export default Cart