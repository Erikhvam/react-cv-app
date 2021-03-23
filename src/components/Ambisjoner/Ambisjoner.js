import React from "react";
import "./Ambisjoner.scss";

export const Ambisjoner = () => {
	return (
		<>
			<section id="ambisjoner">
				<div className="content-wrap">
					<div className="ambisjoner__text">
						<h1>Ambisjoner</h1>
						<p>
							Jeg startet med å lære meg å programmere i slutten av 2020. På
							dette tidspunktet kunne jeg ingenting, så jeg begynte med å lære
							meg HTML, CSS og JavaScript via diverse kurs og tutorials på
							nettet.
						</p>
						<br></br>
						<p>
							Etter hvert begynte jeg å titte på React, da dette ser ut som et
							spennende bibliotek og et naturlig steg videre fra Javascript og
							HTML. I tillegg til dette ser jeg også at svært mange
							arbeidsgivere der ute ser etter utviklere som behersker dette, som
							gjør det enda mer lukrativt.
						</p>
						<br></br>
						<p>
							Mitt mål er å bli en fullstack-utvikler. Steg jeg har tatt for å
							nå dette målet er å titte smått på Node.js og Express (MERN), da
							dette også var et naturlig steg videre med tanke på at dette også
							skrives i Javascript.
						</p>
					</div>
					<div className="chart__wrap">
						<figure className="chart" data-percent="100">
							<figcaption>HTML</figcaption>
							<img className="html" alt="HTML" src="/html-logo.png"></img>
							<svg>
								<circle
									className="outer"
									cx="95"
									cy="95"
									r="85"
									transform="rotate(-90, 95, 95)"
								/>
							</svg>
						</figure>
						<figure className="chart" data-percent="100">
							<figcaption>CSS</figcaption>
							<img className="css" alt="CSS" src="/css-logo.png"></img>
							<svg>
								<circle
									className="outer"
									cx="95"
									cy="95"
									r="85"
									transform="rotate(-90, 95, 95)"
								/>
							</svg>
						</figure>

						<figure className="chart" data-percent="75">
							<figcaption>Javascript</figcaption>
							<img className="javascript" alt="JS" src="/js-logo.png"></img>
							<svg>
								<circle
									className="outer"
									cx="95"
									cy="95"
									r="85"
									transform="rotate(-90, 95, 95)"
								/>
							</svg>
						</figure>
						<figure className="chart" data-percent="25">
							<figcaption>Node</figcaption>
							<img className="node" alt="Node" src="/node-logo.png"></img>
							<svg>
								<circle
									className="outer"
									cx="95"
									cy="95"
									r="85"
									transform="rotate(-90, 95, 95)"
								/>
							</svg>
						</figure>
						<figure className="chart" data-percent="50">
							<figcaption>React</figcaption>
							<img className="React" alt="React" src="/react-logo.png"></img>
							<svg>
								<circle
									className="outer"
									cx="95"
									cy="95"
									r="85"
									transform="rotate(-90, 95, 95)"
								/>
							</svg>
						</figure>
					</div>
				</div>
			</section>
		</>
	);
};

export default Ambisjoner;
