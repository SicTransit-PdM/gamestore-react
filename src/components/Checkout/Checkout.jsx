import { useContext } from "react"
import { doc, addDoc, collection, getFirestore, writeBatch } from 'firebase/firestore'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { peso } from "../../mock"
import swal from "sweetalert"
import CheckoutItem from "../CheckoutItem"
import { useState } from "react"

const Checkout = () =>{

    const { cart, total, count, clear } = useContext(CartContext)
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const buyer = {
        username: username,
        address: address,
        email: email,
        items: cart
    }

    function handlerClear(){
        clear()
    }

    // const sendOrder = ()=>{
    //     const order = {
    //         buyer:{
    //             name: 'paulo',
    //             address: 'calle sin nombre 123',
    //             email: 'test@email.com'
    //         },
    //         items:[{
    //             name: 'GTA V',
    //             price: 2500,
    //         }],
    //         total: 2500
    //     };

    //     const db = getFirestore();
    //     const orderCollection = collection(db, 'orders')
    //     addDoc = (orderCollection, order).then(({id}) => console.log(id))
    // }

    // const updateOrder = () =>{
    //     const db = getFirestore()
    //     const orderDoc = doc(db, 'orders')
    // }

    // const batchOrder = ()=>{
    //     const db = getFirestore()
    //     const batch = writeBatch(db)
    //     const orderDoc = doc(db, 'orders')
    //     batch.update(orderDoc, {total:150}).then((res) => alert('Listo'));
    //     batch.commit()
    // }

    const finalizarCompra = () =>{
        swal("Compra finalizada!", "Su orden de compra fue enviada exitosamente", "success");
        clear()
    }

    const namelog = () =>{
        console.log('nombre', username.value)
    }

    return(
        <div className="my-5 p-5 bg-dark bg-gradient">
            <h1 className="ms-5 mb-4 pb-5 fw-bold text-center">CHECKOUT</h1>
            <div className="p-5 my-2">
                <h2 className="mb-4">Tu Compra:</h2>
                {
                    cart.map((item) => {
                        const newkey = `key-${item.title}`
                        return (
                            <CheckoutItem key={newkey} item={item}/>
                        )
                    })
                }
                <h3 className="mt-2 me-3 text-end fw-bold"> TOTAL : <strong className="ms-4 text-warning">{peso.format(total)}</strong></h3>
            </div>
            <div className="container border border-1 border-info p-5">
            <div className="d-flex flex-column align-items-center">
                <h2 className="mb-5">Datos Personales:</h2>
                <div className="form ms-4 col-md-5">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="">Nombre y Apellido</label>
                        <input className="form-control bg-primary bg-gradient" placeholder="Ej: Juan Perez" type="text" onChange={(e) => setUsername(e.target.value)} />
                        <button className="btn btn-primary rounded-pill" onClick={() => namelog()}></button>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="">Dirección</label>
                        <input className="form-control bg-primary bg-gradient" placeholder="Ej: Calle Falsa 123" type="text" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="">Email</label>
                        <input className="form-control bg-primary bg-gradient" placeholder="Ej: ejemplo@email.com" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <Link to='/' ><button type="submit" className="btn btn-xl btn-info rounded-pill me-3 px-3" onSubmit={() => finalizarCompra()}>Crear Orden: {peso.format(total)}</button></Link>
                    </div>
                </div>
            </div>
                {/* <div>
                    <button className="btn" onClick={()=>sendOrder()}>Generar Orden</button>
                </div>
                <div>
                    <button className="btn" onClick={()=>updateOrder()}>Actualizar Orden</button>
                </div>
                <div>
                    <button className="btn" onClick={()=>batchOrder()}>Actualizar por Lotes</button>
                </div> */}
            </div>
        </div>
    )
}

export default Checkout