import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({menus, children}) => {
    return(
        <div className='navbar navbar-expand-lg bg-dark navbar-dark py-3'>
            <div className='container'>
                <Link className="navbar-brand text-info fs-4 fw-bold order-lg-0" to={'/'}>GameStore</Link>
                <button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navmenu"
				>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-lg-1" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                    {
                        menus.map((menu, index) => {
                            const newkey = `menu-${menu.title}-${index}`
                            return <li key={newkey} className="nav-item">
                                    <Link to={menu.href} className="nav-link" id="nav-link">{menu.title}</Link>
                                </li>
                        })
                    }
                    </ul>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

Navbar.proptype = {
    menus: PropTypes.element.isRequired,
    children: PropTypes.element
}
export default Navbar;