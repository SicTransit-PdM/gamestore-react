import PropTypes from 'prop-types';

const ItemListContainer = ({greeting, desc}) => {
    return(
		<div className=" ItemListContainer bg-primary text-success p-5 text-center bg-image">
			<div className="container" >
				<div className="mt-5 pt-4 align-items-center justify-content-center">
                    <h1>{greeting}</h1>
                    <h2>
                        Comprá tus juegos <span className="text-warning">al mejor precio</span>
                    </h2>
                    <p className="lead my-4 fw-bold">{desc}</p>
                    <a href="#"><button className="btn btn-secondary btn-lg px-4" type="button">Ver catálogo</button></a>
				</div>
			</div>
		</div>
    )
}

ItemListContainer.proptype = {
    greeting: PropTypes.string,
    desc: PropTypes.string
}

export default ItemListContainer;