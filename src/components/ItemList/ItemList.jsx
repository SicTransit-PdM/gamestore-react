import PropTypes from 'prop-types'
import Item from '../Item/Item'

const ItemList = ({itemlist}) => {
    return (
        <div className='ItemList justify-content-center row g-2 my-4'>
            {
                itemlist && itemlist.map((item) => {
                    const newkey = `item-${item.id}-${item.title}`
                    return <Item key={newkey}  item={item}></Item>
                })
            }
        </div>
    )
}

ItemList.propType = {
    itemlist: PropTypes.array,
    children: PropTypes.element
}

export default ItemList
