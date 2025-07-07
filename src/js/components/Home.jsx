import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Cards } from "./Cards";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">

				<Hero />

				<section className="row">
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Black Lotus'
							descripcion='Esta carta es la más icónica y poderosa de Magic. 
							Permite generar tres manás de cualquier color sin coste, 
							lo que puede ser decisivo en los primeros turnos para establecer una ventaja abrumadora. '
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Ancestral Recall'
							descripcion='Una carta que roba tres cartas, 
							es una herramienta esencial para mazos que buscan acumular 
							recursos y opciones estratégicas. '
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Time Walk'
							descripcion='Permite al jugador tomar un turno adicional, 
							lo que puede romper el ritmo del oponente y 
							generar un impacto significativo en el desarrollo de la partida. '
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Mox Sapphire'
							descripcion='Una de las cinco cartas "Mox", esta criatura permite generar maná azul, 
							lo que facilita el despliegue de hechizos y criaturas de este color, muy comunes en mazos competitivos. '
						/>
					</div>
					
				</section>

			</div>

		</>
	);
};

export default Home;