import { useContext } from "react"
import { doc, addDoc, collection, getFirestore, writeBatch } from 'firebase/firestore'
import { CartContext } from "../../context/CartContext"
import { peso } from "../../mock"

const CartCheckout = () =>{

    const { cart } = useContext(CartContext)

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

    return(
        <div>
            <h2>Finalizar compra:</h2>
            <div className="checkout-buyer container">
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Dirección</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
            </div>
            <div className="container">
                {
                    cart.map((item) => {
                        const totalPrice = totalPrice + item.price
                        return (
                            <div>
                                <img src={item.img} alt="img" />
                                <p>{item.name}</p>
                                <span>{item.price}</span>
                            </div>
                        )
                    })
                }
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
    )
}

export default CartCheckout