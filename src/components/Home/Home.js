import React from "react";
import "./Home.scss";

export const Home = () => {
	return (
		<>
			<section id="home">
				<div className="content-wrap">
					<div className="columns">
						<div className="columns__left">
							<picture>
								<img
									className="home__img"
									src="/resized_img.png"
									alt="bilde av meg"
								></img>
							</picture>
						</div>
						<div className="columns__right">
							<h1>Erik Hvam</h1>
							<p>
								Hei. Jeg er en aspirerende utvikler som ønsker å bli bedre. I
								slutten av 2020 bestemte jeg meg for å lære meg å programmere,
								da det er noe jeg har ønsket å jobbe med lenge. Språk jeg
								fokuserer på er JavaScript og React, men målet er å bli en
								fullstack-utvikler. Hobbyer er mat, spill og musikk.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
