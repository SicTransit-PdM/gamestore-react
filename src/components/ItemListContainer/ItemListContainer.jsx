import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemList from '../ItemList'
// import { products, categories } from '../../mock'


const ItemListContainer = ({greeting}) => {
    
    const [items, setItems] = useState([])
    const [itemcopy, setItemCopy] = useState(items)
    const [categories, setCategories] = useState([])
    
    const { id } = useParams()

    const FilterCategory = () => {
        if (id && itemcopy){
        const newProducts = itemcopy.filter((item) => item.category == id);
        return newProducts;
        } else{
        return itemcopy;
        }
    };

    useEffect(() => {
        const filter = FilterCategory()
        setItems(filter)
    }, [id])


    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'item')
        getDocs(itemCollection).then((result) => {
            setItems(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setItemCopy(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
    },[])
    
    useEffect(() => {
        const dbc = getFirestore();
        const categoryCollection = collection(dbc, 'categories')
        getDocs(categoryCollection).then((result) => {
            setCategories(result.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        })
    },[])

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
                        <a href='#Catalogo_title'><button className="btn btn-secondary fw-bold btn-lg px-4" type="button">Ver Catálogo</button></a>
                    </div>
                </div>
            </div>
            <div className='bg-dark bg-gradient border border-info' id='filters'>
                <div className="py-2 justify-content-center btn-group-sm d-inline-flex d-md-flex  flex-wrap flex-start btn-group" role="group" aria-label="Basic radio toggle button group">
                    <div key='btnradio-todos'>
                        <input type="radio" className="btn-check" name="btnradio" id='btnradio-todos' autoComplete="off" defaultChecked />
                        <Link to={`/catalogo`}><label type="button" className="btn btn-outline-info rounded-pill text-light m-2 px-3 py-1" htmlFor='btnradio-todos'>Todos</label></Link>
                    </div>
                {
                    categories && categories.map((category) => {
                        const label = `btnradio-${category.title}`
                        return (    
                                    <div key={label}>
                                        <input type="radio" className="btn-check" name="btnradio" id={label} autoComplete="off" />
                                        <Link to={`/categoria/${category.title}`}><label type="button" className="btn btn-outline-info rounded-pill text-light m-2 px-3 py-1" htmlFor={label}>{category.title}</label></Link>
                                            
                                    </div>
                                )
                    })
                }
                </div>
            </div>
            <div className='py-3'>
                <div className="container card mb-3 bg-gradient bg-dark border border-info">
                    <h2 className='mt-4 title text-center fw-bold user-select-none' id='Catalogo_title'>CATALOGO</h2>
                    <hr className='border-1 border-top border-info divider' />
                    {
                        
                        items.length != 0 
                        ? <ItemList itemlist={items}/>
                        : <div className='container'>
                            <div className="d-flex m-5 justify-content-center">
                                <h1 className='text-warning'>No hay resultados</h1>
                            </div>
                        </div>

                    }
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