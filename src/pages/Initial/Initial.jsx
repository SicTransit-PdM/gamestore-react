import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import CartWidget from '../../components/CartWidget';
import ItemListContainer from '../../components/ItemListContainer'
import ItemDetailContainer from '../../components/ItemDetailContainer';
import { menus , products, categories } from '../../mock'
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Initial = () => {
    const [user, setUser] = useState('')
    const [itemCount, setItemCount] = useState()
    const greeting = user ?  `Bienvenido, ${user.name}` : '¡Bienvenido!';

    return(
        <Layout>
            <BrowserRouter>
                <Navbar menus={menus} ><CartWidget itemCount={itemCount} /></Navbar>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/catalogo' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/categoria/:id' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
                    <Route exact path='/contacto' element={<ItemListContainer greeting={greeting} />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default Initial;