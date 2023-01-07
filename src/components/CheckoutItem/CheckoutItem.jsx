import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { peso } from '../../mock'


const CheckoutItem = ({item}) =>{
    const {removeItem} = useContext(CartContext)
    
    const handlerRemoveItem = (item) =>{
        removeItem(item)
    }
    return(
            <div className="row g-0 mb-3 bg-dark bg-gradient border border-1 border-info">
                <div className="col-md-2">
                    <img src={item.img} height="150" width="190" className="border-end border-1 border-info-subtle rounded-start" alt="img" />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-center ps-5 ms-3">
                    <div className='d-flex flex-row'>
                        <div className="card-body text-light">
                            <Link to={`/item/${item.id}`}><h2 className="card-title text-warning fw-bold mb-2">{item.title}</h2></Link>
                            <button type="button" className="btn btn-link btn-sm text-info fw-bold" onClick={() => handlerRemoveItem(item)}>Quitar</button>
                        </div>
                        <h2 className='mb-4 fw-bold'>{peso.format(item.price)}</h2>
                    </div>
                </div>
            </div>
    )
}

export default CheckoutItem