export const Cards = ({ imagen, titulo, descripcion, enlace }) => {



    return (
        <div className="card h-100 bg-dark text-white">
            <img src={imagen} className="card-img-top" alt={titulo} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text flex-grow-1">{descripcion}</p>
                <a href={enlace} className="btn btn-outline-light btn-sm mt-auto" target="_blank" rel="noopener noreferrer">
                    👀 Ver en Cadmarket
                </a>
            </div>
        </div>
    )
} 