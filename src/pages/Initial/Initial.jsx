import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { menus } from '../../mock'
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import CartWidget from '../../components/CartWidget';
import CartCheckout from '../../components/CartCheckout';
import ItemListContainer from '../../components/ItemListContainer'
import ItemDetailContainer from '../../components/ItemDetailContainer';
import Footer from '../../components/Footer'

const Initial = () => {
    const greeting = '¡Bienvenido!';

    return(
        <Layout>
            <BrowserRouter>
                <Navbar menus={menus} ><CartWidget/></Navbar>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/catalogo' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/categoria/:id' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
                    <Route exact path='/contacto' element={<ItemListContainer greeting={greeting} />} />
                    <Route exact path='/checkout' element={<CartCheckout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </Layout>
    )
}

export default Initial;