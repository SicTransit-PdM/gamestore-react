import { Link } from 'react-router-dom'

const CartItem = (item) =>{
    return(
        <div className="cartitem mb-1 mx-lg-1 border border-primary bg-dark">
            <div className="row g-0">
                <div className="col-md-4 px-md-0">
                    <img src={item.thumb} height="90" width="175" className="ms-1 rounded-start" alt="img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-light">
                        <Link to='/item/'>
                            <h5 className="card-title text-warning fw-bold">{item.title}</h5>
                        </Link>
                        <button type="button" className="btn btn-link btn-sm">Quitar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem