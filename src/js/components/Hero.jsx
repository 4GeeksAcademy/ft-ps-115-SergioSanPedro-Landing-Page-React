export const Hero = () => {

    return (
        <div className="px-4 py-5 my-5 d-flex justify-content-start bg-light">
            <h1 className="display-5 fw-bold">TOP cartas Magic</h1>
            <div className="p-2 col-md-4 mx-auto">
                <p className="lead mb-4">
                    Bienvenida a la página donde podrás encontrar las mejores cartas Magic que podrás
                     utilizar en tus decks y así poder llegar a conseguir llegar a lo más alto. Sólo te voy a mostrar el top 5 de las cartas y sus precios, 
                     Hay muchísimas más y cada una irá bien dependiendo de la temática en la que quieras jugar y estrategia, pero te muestro las estándares que pueden 
                     servir para todos los tipos deck´s. Mucha suerte!!
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