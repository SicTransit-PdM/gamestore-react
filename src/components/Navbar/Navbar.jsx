import PropTypes from 'prop-types'

const Navbar = ({menus, children}) => {
    return(
        <div className='navbar navbar-expand-lg bg-dark navbar-dark py-3'>
            <div className='container'>
                <a className="navbar-brand text-info fs-4 fw-bold order-lg-0" href="#">GameStore</a>
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
                        menus.map((menu) => {
                            return <li key={menu} className="nav-item">
                                    <a href="#" className="nav-link" id="nav-link">{menu}</a>
                                </li>
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className='cart'>
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