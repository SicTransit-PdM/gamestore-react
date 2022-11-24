import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import ItemListContainer from '../../components/ItemListContainer'
import CartWidget from '../../components/CartWidget';
import {useState} from 'react'

const Initial = () => {
    const Menus = ['Inicio', 'Productos', 'Contacto'];
    const Saludo = 'Bienvenidos';
    const [itemCount, setItemCount] = useState(0)
    const desc = 'Los mejores juegos a precios competitivos, consulta nuestro catálogo y encontrá el juego que buscabas y más.'

    return(
        <Layout>
            <Navbar menus={Menus}><CartWidget itemCount={itemCount} /></Navbar>
            <ItemListContainer greeting={Saludo} desc={desc}/>
        </Layout>
    )
}

export default Initial;