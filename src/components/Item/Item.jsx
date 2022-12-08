import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    //const label = `#IDC-${item.id}`
    return (
            // <Link to={`/item/${item.id}`} className="item card col-md-2 border border-info" data-bs-toggle="modal" data-bs-target={label}>
            <Link to={`/item/${item.id}`} className="item card col-md-2 border border-info">
                <img src={item.img} className="card-img rounded-start" alt="img" />
                <div className=" card-img-overlay">
                </div>
            </Link>
    )
}

Item.propType = {
    item: PropTypes.object
}
export default Item