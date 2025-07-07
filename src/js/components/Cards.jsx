export const Cards = ({imagen, titulo, descripcion}) => {



    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={titulo}/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href="#" className="btn btn-primary">Añadir al carrito</a>
                </div>
        </div>
    )
} 