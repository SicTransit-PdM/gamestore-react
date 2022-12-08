import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from '../../mock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const item = products.find((item) => item.id == id)

    //const label = `IDC-${item.id}`
    
    return (
        // <div className="modal modal-lg fade">
        //     <div className="modal-dialog modal-dialog-centered" role="document" id={label}>
        //         <ItemDetail item={item}/>
        //     </div>
        // </div>
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer 