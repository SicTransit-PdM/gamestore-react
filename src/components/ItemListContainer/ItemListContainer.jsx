import PropTypes from 'prop-types';
import ItemList from '../ItemList'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { products, categories } from '../../mock'


const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState(products)

    const { id } = useParams()

    const FilterCategory = new Promise((resolve,reject) => {
        setTimeout(() => {
            let newProducts = id ? products.filter((item) => item.category.id == id) : products
            resolve(newProducts)
        },2000)
    })

    useEffect(() =>{
        FilterCategory.then((response) =>{
            setItems(response)
        })
    },[id])

    return(
		<div>
            <div className="ItemListContainer bg-primary text-success p-5 text-center bg-image">
                <div className="container">
                    <div className="mt-5 pt-4 align-items-center justify-content-center">
                        <h1>{greeting}</h1>
                        <h2>
                            Comprá tus juegos <span className="text-warning">al mejor precio</span>
                        </h2>
                        <p className="lead my-4 fw-bold">Los mejores juegos a precios competitivos, consulta nuestro catálogo y encontrá el juego que buscabas y más.</p>
                        <Link to={'/catalogo'}><button className="btn btn-secondary btn-lg px-4" type="button">Ver Catálogo</button></Link>
                    </div>
                </div>
            </div>
            <div className='bg-dark bg-gradient border border-info'>
                <div className="py-2 justify-content-center btn-group-sm d-inline-flex d-md-flex  flex-wrap flex-start btn-group" role="group" aria-label="Basic radio toggle button group">
                {
                    categories && categories.map((category) => {
                        const label = `btnradio-${category.id}`
                        return (    
                                    <div key={label}>
                                        <input type="radio" className="btn-check" name="btnradio" id={label} autoComplete="off" defaultChecked />
                                            <label type="button" className="btn btn-outline-info rounded-pill text-light m-2 px-3 py-1" htmlFor={label}><Link to={`/categoria/${category.id}`}>{category.title}</Link></label>
                                            
                                    </div>
                                )
                    })
                }
                </div>
            </div>
            <div className='py-3 bg-dark'>
                <div className="container card mb-3 bg-gradient bg-dark border border-info">
                    <h2 className='mt-4 title text-center fw-bold' id='Catalogo_title'>CATALOGO</h2>
                    <ItemList itemlist={items}/>
                </div>
            </div>
        </div>
    )
}

ItemListContainer.proptype = {
    greeting: PropTypes.string,
    desc: PropTypes.string,
    children: PropTypes.element
}

export default ItemListContainer;