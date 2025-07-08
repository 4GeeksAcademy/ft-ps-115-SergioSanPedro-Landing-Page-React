import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<header id="top">
				<NavBar />
			</header>


			<div className="container">
				<Hero />

				<section className="row mb-5">
					<div className="col-lg-3 col-md-6" id="cartas">
						<Cards
							imagen='https://api.tcg.land/images/mtg/v2/30a/228/en/a-100.webp'
							titulo='Black Lotus'
							descripcion='Esta carta es la más icónica y poderosa de Magic. 
							Permite generar tres manás de cualquier color sin coste, 
							lo que puede ser decisivo en los primeros turnos para establecer una ventaja abrumadora. '
							enlace='https://www.cardmarket.com/es/Magic/Products/Singles/30th-Anniversary-Edition/Black-Lotus-V1'
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='https://cards.scryfall.io/png/front/7/1/71283e4c-efd9-4a96-991c-6bbb169b99e7.png?1664924695'
							titulo='Ancestral Recall'
							descripcion='Una carta que roba tres cartas, 
							es una herramienta esencial para mazos que buscan acumular 
							recursos y opciones estratégicas.'
							enlace='https://www.cardmarket.com/es/Magic/Products/Singles/Beta/Ancestral-Recall'
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='https://api.tcg.land/images/mtg/v2/30a/380/en/a-100.webp'
							titulo='Time Walk'
							descripcion='Permite al jugador tomar un turno adicional, 
							lo que puede romper el ritmo del oponente y 
							generar un impacto significativo en el desarrollo de la partida. '
							enlace='https://www.cardmarket.com/es/Magic/Products/Singles/Alpha/Time-Walk'
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='https://cards.scryfall.io/png/front/e/e/eebe1882-f2f4-4749-8890-974e9eb48d68.png?1559591745'
							titulo='Mox Sapphire'
							descripcion='Una de las cinco cartas "Mox", esta criatura permite generar maná azul, 
							lo que facilita el despliegue de hechizos y criaturas de este color, muy comunes en mazos competitivos. '
							enlace='https://www.cardmarket.com/es/Magic/Products/Singles/Unlimited/Mox-Sapphire'
						/>
					</div>
				</section>
			</div>

			<Footer />

		</>
	);
};

export default Home;