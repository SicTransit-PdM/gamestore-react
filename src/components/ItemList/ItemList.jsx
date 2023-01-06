import PropTypes from 'prop-types'
import Item from '../Item/Item'

const ItemList = ({itemlist}) => {
    return (
        itemlist
        ?   <div className='ItemList justify-content-center row g-2 my-4'>
                {
                    itemlist && itemlist.map((item) => {
                        // const newkey = `item-${item.id}-${item.title}`
                        return <Item key={item.id}  item={item}></Item>
                    })
                }
            </div>
        :   <h2>No hay ningún resultado</h2>
    )
}

ItemList.propType = {
    itemlist: PropTypes.array,
    children: PropTypes.element
}

export default ItemList
