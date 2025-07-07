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
							titulo='Nombre de la carta'
							descripcion='descripcion de la carta'
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Nombre de la carta'
							descripcion='descripcion de la carta'
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Nombre de la carta'
							descripcion='descripcion de la carta'
						/>
					</div>
					<div className="col-lg-3 col-md-6">
						<Cards
							imagen='la imagen'
							titulo='Nombre de la carta'
							descripcion='descripcion de la carta'
						/>
					</div>
					
				</section>

			</div>

		</>
	);
};

export default Home;