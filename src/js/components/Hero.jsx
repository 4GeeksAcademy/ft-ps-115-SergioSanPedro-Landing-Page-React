export const Hero = () => {

    return (
        <div className="px-4 py-5 my-5 d-flex justify-content-start bg-white bg-opacity-25" style={{textShadow: "2px 3px 4px rgba(0,0,0,0.8)"}}>
            <h1 className="display-5 fw-bold text-white">TOP cartas Magic</h1>
            <div className="p-2 col-md-4 mx-auto">
                <p className="lead mb-4 fw-bold text-white" >
                    Bienvenida a la página donde podrás encontrar las mejores cartas Magic que podrás
                     utilizar en tus decks y así poder llegar a conseguir llegar a lo más alto. Sólo te voy a mostrar el top 4 de las cartas y sus precios, 
                     Hay muchísimas más y cada una irá bien dependiendo de la temática en la que quieras jugar y estrategia, pero te muestro las estándares que pueden 
                     servir para todos los tipos deck`s. Mucha suerte!!
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-md px-4">
                        Cilck para comprarlas!
                    </button>
                    
                </div>
            </div>
        </div>
    )
};