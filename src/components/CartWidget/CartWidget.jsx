import PropTypes from 'prop-types'

const CartWidget = ({itemCount, cartList}) => {
	const itemCounter = itemCount ? itemCount : ''
	const totalPrice = cartList ? cartList.map((item) => {
		totalPrice += item.price
	}) : 0
    return(
    <div className="order-lg-2 me-5">
        <button type="button" className="btn position-relative dropdown-toggle" id="btn-carrito" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-cart text-light fs-4"/>
            <span className="position-absolute top-0 start-90 translate-middle-x badge bg-secondary text-light rounded-pill">{itemCounter}</span>
        </button>
        <div className="container w-50 dropdown-menu dropdown-menu-dark bg-dark dropdown-menu-end" aria-labelledby="btn-carrito">
		{ 
		itemCount ? 
			<div className="d-flex justify-content-between align-items-center">
				<div className="mt-2 ms-5">
					<span className="text-muted">Tu carrito</span>
					<p>{itemCount} items agregados</p>
				</div>
				<div className="d-flex align-items-center">
					<span className="me-4 lead">{totalPrice}</span>
					<button className="btn btn-success rounded-pill me-5 px-3">Comprar</button>
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
					{/* <button className="btn btn-warning rounded-pill me-5 px-3 disabled">Carrito Vacío</button> */}
				</div>
			</div>
		}
		</div>
    </div>
    )
}

CartWidget.prototype = {
    items: PropTypes.number
}
export default CartWidget