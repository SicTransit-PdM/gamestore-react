import PropTypes from 'prop-types'

const CartWidget = ({itemCount}) => {
    return(
    <div className="order-lg-2">
        <button type="button" className="btn position-relative dropdown-toggle" id="btn-carrito" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-cart text-light fs-4"></i>
            <span className="position-absolute top-0 start-90 translate-middle-x badge bg-secondary text-light rounded-pill" id="cantCarrito">0</span>
        </button>
        <div className="container w-50 dropdown-menu dropdown-menu-dark bg-dark dropdown-menu-end" aria-labelledby="btn-carrito">
						<div className="d-flex justify-content-between align-items-center">
							<div className="mt-2 ms-5">
								<span className="text-muted">Tu carrito</span>
								<p id="items-agregados">{itemCount} items agregados</p>
							</div>
							<div className="d-flex align-items-center">
								<span className="me-4 lead" id="total-carrito">$0,00</span>
								<button className="btn btn-warning rounded-pill me-5 px-3 disabled" id="btn-comprar">Carrito vacio</button>
							</div>
						</div>
						<div id="lista-carrito">
					</div>
		</div>
    </div>
    )
}

CartWidget.prototype = {
    items: PropTypes.number
}
export default CartWidget