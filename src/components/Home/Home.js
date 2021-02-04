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
								Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
								ipsum
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
