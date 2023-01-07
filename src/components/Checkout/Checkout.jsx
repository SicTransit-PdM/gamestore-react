import { useContext } from "react"
import { doc, addDoc, collection, getFirestore, writeBatch, setDoc } from 'firebase/firestore'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { peso } from "../../mock"
import swal from "sweetalert"
import CheckoutItem from "../CheckoutItem"
import { useState } from "react"

const Checkout = () =>{

    const { cart, total, count, clear } = useContext(CartContext)

    const [buyer, setBuyer] = useState( {
        firstname: '',
        lastname: '',
        address: '',
        phone: 0,
        email: '',
    })

    function handleChange(e){
        setBuyer((prev) =>{
            const key = e.target.name
            let value = e.target.value

            value = parseInt(value, 10) || value

            return{...prev, [key]: value}
        })
    }

    const sendOrder = ()=>{
        const order = { 
            buyer: buyer, 
            items: cart.map(item => ({id: item.id, name: item.title, price: item.price})),
            total: total
        }
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then(({id}) => {
            swal("Compra Finalizada!", `Su orden de compra fue enviada exitosamente. ID de la orden: ${id}`, "success");
            clear()
        })
    }

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
                <div className="">
                    <h2 className="mb-5 text-center">Datos Personales:</h2>
                    <div className="form d-flex flex-column align-items-center">
                        <div className="mb-3 row w-75">
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="">Nombre:</label>
                                <input className="form-control bg-primary bg-gradient" name="firstname" type="text" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="">Apellido:</label>
                                <input className="form-control bg-primary bg-gradient" name="lastname" type="text" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="mb-3 row w-75">
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="">Dirección:</label>
                                <input className="form-control bg-primary bg-gradient" placeholder="Ej: Calle Falsa 123" name="address" type="text" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="">Número de teléfono:</label>
                                <input className="form-control bg-primary bg-gradient" name="phone" type="text" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="mb-3 row w-75">
                            <label className="form-label px-2" htmlFor="">Email</label>
                            <input className="form-control bg-primary bg-gradient" placeholder="Ej: ejemplo@email.com" name="email" type="email" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="mt-5 d-flex justify-content-center">
                            <Link to='/' ><button className="btn btn-xl btn-success rounded-pill me-3 px-3" onClick={() => sendOrder()}>Crear Orden: {peso.format(total)}</button></Link>
                        </div>
                    </div>
                </div>
                {/* <div>
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