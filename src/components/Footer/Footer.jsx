const Footer = () =>{
    return (
    <div className="Footer container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-6 d-flex align-items-center">
                <a href="#" className="mb-3 me-2 mb-md-0 text-info text-decoration-none lh-1">
                        <i className="bi bi-github"></i>
                </a>
                <p className="mb-3 mb-md-0 text-info"><strong >© 2022 SicTransit</strong> | Todos los derechos reservados</p>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a href="#" className="text-info">
                        <i className="bi bi-twitter"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a href="#" className="text-info">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a href="#" className="text-info">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
    )
}

export default Footer