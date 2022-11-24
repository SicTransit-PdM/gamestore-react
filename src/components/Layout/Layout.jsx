import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <div>{children}</div>
    )
}

Layout.proptype = {
    children: PropTypes.element.isRequired
}
export default Layout;