import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { peso } from '../../mock'
import CartItem from '../CartItem'

const Cart = () =>{

    const { count, cart } = useContext(CartContext)
	const totalPrice = cart.length > 0 ? cart.map((item) => 0 + item.price) : 0
    function verCarrito(){
        console.log('Carrito Actualizado', cart)
    }
    return(
        <div className="container w-50 dropdown-menu dropdown-menu-dark bg-dark dropdown-menu-end" aria-labelledby="btn-carrito">
            <button onClick={() => verCarrito()}>Ver carrito</button>
		{ 
		count ? 
			<div className="d-flex justify-content-between align-items-center">
				<div className="mt-2 ms-5">
					<span className="text-muted">Tu carrito</span>
					<p>{count} items agregados</p>
				</div>
				<div className="d-flex align-items-center">
					<span className="me-4 lead">{peso.format(totalPrice)}</span>
					<Link to='/checkout' ><button className="btn btn-success rounded-pill me-5 px-3">Comprar</button></Link>
				</div>
                {
                    cart && cart.map((item, i) => {
                        console.log('Item en carrito', item)
                        const key = 'key-'+{i}
                        return(
                            <h1 key={key}>asd</h1>
                            // <CartItem key={item.id} item={item} />
                        )
                    })
                }
			</div>
		: 
			<div className="d-flex justify-content-between align-items-center">
				<div className="mt-2 ms-5">
					<span className="text-muted">Tu carrito</span>
					<p>No has agregado ningún producto al carrito</p>
				</div>
				<div className="d-flex align-items-center">
					<span className="me-4 lead"></span>
					<button className="btn btn-warning rounded-pill me-5 px-3 disabled">Carrito Vacío</button>
				</div>
			</div>
		}
		</div>
    )
}

export default Cart