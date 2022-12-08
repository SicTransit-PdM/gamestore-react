import PropTypes from 'prop-types';
import {peso} from '../../mock'

const ItemDetail = ({item}) => {
    return (
        // <div className="modal-body">
        //     <div className='modal-header'>
        //         <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true"></span>
        //         </button>
        //     </div>
        //     <div className="itemDetail card mb-3 ms-lg-4 mx-3 bg-gradient bg-dark border border-info">
        //         <div className="row g-0 ms-3">
        //             <div className="col-md-4 px-md-0 p-4">
        //                 <img src={item.img} className="img-fluid rounded-start" alt="img" />
        //             </div>
        //             <div className="col-md-8 align-items-center justify-content-evenly flex-md-column">
        //                 <div className="card-body text-light">
        //                     <h5 className="card-title text-warning fw-bold mt-3">{item.title}</h5>
        //                     <small className='badge rounded-pill bg-secondary'>{item.category.title}</small>
        //                     <p className="Item-descr card-text mt-4">{item.descr}</p>
        //                 </div>
        //                 <div className="d-flex align-items-center mb-3 justify-content-evenly flex-md-column">
        //                     <p className="card-text mt-4"><small className="text-warning p-2 h5 fw-bold">ARS{peso.format(item.price)}</small></p>
        //                     <button type="button" className="btn btn-success rounded-pill btn-agregar">Agregar al Carrito</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    <div className="container my-5">
        <div className="itemDetail card mb-3 ms-lg-4 mx-3 bg-gradient bg-dark border border-info">
            <div className="row g-0 ms-3">
                <div className="col-md-3 px-md-0 p-4">
                    <img src={item.img} className="img-fluid rounded-start" alt="img" />
                </div>
                <div className="col-md-8 align-items-center justify-content-evenly flex-md-column">
                    <div className="card-body text-light">
                        <h5 className="card-title text-warning fw-bold mt-3">{item.title}</h5>
                        <small className='badge rounded-pill bg-secondary'>{item.category.title}</small>
                        <p className="Item-descr card-text mt-4">{item.descr}</p>
                    </div>
                    <div className="d-flex align-items-center mb-3 justify-content-evenly flex-md-column">
                        <p className="card-text mt-4"><small className="text-warning p-2 h5 fw-bold">ARS{peso.format(item.price)}</small></p>
                        <button type="button" className="btn btn-success rounded-pill btn-agregar">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

ItemDetail.propType = {
    item: PropTypes.object
}
export default ItemDetail