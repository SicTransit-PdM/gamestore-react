import { useContext } from "react"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { peso, fecha } from "../../mock"
import swal from "sweetalert"
import CheckoutItem from "../CheckoutItem"
import { useState } from "react"

const Checkout = () =>{

    const { cart, total, clear } = useContext(CartContext)
    const timestamp = Date.now()
    let [email2, setEmail2] = useState('')
    let navigate = useNavigate();
    
    const [buyer, setBuyer] = useState( {
        firstname: '',
        lastname: '',
        address: '',
        phone: 0,
        email: '',
    })

    function toIndex(){
        navigate('/');
    }

    function handleChange(e){
        validateForm()
        if(e.target.name == 'email2'){
            setEmail2(e.target.value)
        }else{
            setBuyer((prev) =>{
                const key = e.target.name
                let value = e.target.value
                value = parseInt(value, 10) || value
                return{...prev, [key]: value}
            })}
    }

    function validateForm(){
        let res
        // for (const prop in buyer){
        //     res = buyer[prop] != '' && buyer[prop]!= 0
        // }
        res = buyer.firstname != '' && buyer.lastname != '' && buyer.address != '' && buyer.phone != 0 && buyer.phone != '' && buyer.email != '' && email2 != ''
        return res
    }
    
    function validateEmail(e){
        let email1 = buyer.email
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        let res = email1 == email2 && reg.test(email1)
        return res
    }

    function handleSubmit(){
        swal({
            title: "¿Estás seguro?",
            text: "Una vez enviada, la orden no podrá ser modificada",
            icon: "info",
            buttons: true,
            dangerMode: false,
        })
        .then((willDelete) => {
            if (willDelete) {
                sendOrder()
            }
        });
    }

    const sendOrder = ()=>{
        const order = { 
            buyer: buyer, 
            items: cart.map(item => ({id: item.id, name: item.title, price: item.price})),
            total: total,
            date: fecha.format(timestamp)
        }
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then(({id}) => {
            swal("Compra Finalizada!", `Su orden de compra fue enviada exitosamente.\nID de orden: ${id}`, "success");
            console.log(`Order sent: ID ${id}`, order)
            clear()
            toIndex()
        })
    }

    const formIsValid = validateForm()
    const emailIsValid = validateEmail()

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
                total != 0
                ?
                    cart.map((item) => {
                        const newkey = `key-${item.title}`
                        return (
                            <CheckoutItem key={newkey} item={item}/>
                        )
                    })
                    : <div className="container p-5">
                        <h1 className="fw-bold text-warning text-center mb-4">No hay ningun producto en su lista</h1>
                        <h3 className="text-info text-center">Agregue algun producto al carrito</h3>
                    </div>
                }
                <h3 className="mt-2 me-3 text-end fw-bold"> TOTAL : <strong className="ms-4 text-warning">{peso.format(total)}</strong></h3>
            </div>
            {
            total != 0 ?
            <div className="container border border-1 border-info p-5">
                <div className="">
                    <h2 className="mb-5 text-center">Datos Personales:</h2>
                    <div className="form d-flex flex-column align-items-center">
                        <div className="mb-3 row w-75">
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="firstname">Nombre:</label>
                                <input id="firstname" className="form-control bg-primary bg-gradient" name="firstname" type="text" required onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="lastname">Apellido:</label>
                                <input id="lastname" className="form-control bg-primary bg-gradient" name="lastname" type="text" required onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="mb-3 row w-75">
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="address">Dirección:</label>
                                <input id="address" className="form-control bg-primary bg-gradient" placeholder="Ej: Calle Falsa 123" name="address" type="text" required onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="col-6">
                                <label className="form-label px-2" htmlFor="phone">Número de teléfono:</label>
                                <input id="phone" className="form-control bg-primary bg-gradient" name="phone" type="text" inputMode="numeric" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="mb-3 row w-75">
                            <label className="form-label px-2" htmlFor="email1">Email:</label>
                            <input id="email1" className="form-control bg-primary bg-gradient" placeholder="ejemplo@email.com" name="email" type="email" required onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="mb-3 row w-75">
                            <label className="form-label px-2" htmlFor="email2"> Confirmar Email:</label>
                            <input id="email2" className="form-control bg-primary bg-gradient" placeholder="ejemplo@email.com" name="email2" type="email" required onChange={(e) => handleChange(e)} />
                        </div>
                        {
                            formIsValid && emailIsValid
                        ?
                        <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-xl btn-success rounded-pill me-3 px-3" type="submit" onClick={() => handleSubmit()}>Crear Orden: {peso.format(total)}</button>
                        </div>
                        :
                        <div className="mt-3 d-flex justify-content-center">
                            <button className="btn btn-xl btn-info rounded-pill me-3 px-3 disabled" type="submit" onClick={() => handleSubmit()}>Crear Orden: {peso.format(total)}</button>
                        </div>
                        }
                    </div>
                </div>
                {/* <div>
                    <button className="btn" onClick={()=>updateOrder()}>Actualizar Orden</button>
                </div>
                <div>
                    <button className="btn" onClick={()=>batchOrder()}>Actualizar por Lotes</button>
                </div> */}
            </div>
            : <div></div>
            }
        </div>
    )
}

export default Checkout