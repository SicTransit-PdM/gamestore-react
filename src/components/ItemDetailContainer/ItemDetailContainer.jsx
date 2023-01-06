import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        const db = getFirestore();
        const itemDoc = doc(db, 'item', id)
        getDoc(itemDoc).then((result) => {
            if(result.exists()){
                setItem({...result.data()})
            }
        })
    },[])

    //const label = `IDC-${item.id}`
    
    return (
        // <div className="modal modal-lg fade">
        //     <div className="modal-dialog modal-dialog-centered" role="document" id={label}>
        //         <ItemDetail item={item}/>
        //     </div>
        // </div>
        item 
        ? <ItemDetail item={item}/> 
        : <div className="cargando d-flex justify-content-center align-items-center m-5 p-5">
            <h1 className="text-warning">Cargando...</h1>
        </div>
    )
}

export default ItemDetailContainer 