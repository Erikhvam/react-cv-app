import React from "react";
import "./About.scss";

export const About = () => {
	return (
		<>
			<section id="about">
				<div className="content-wrap"></div>
				<div className="CV-top">
					<h1>Curriculum Vitae</h1>
				</div>
				<div className="about">
					<div className="about__box">
						<div className="image1">
							<img
								className="image__utdanning"
								src="/utdanning.png"
								alt="utdanning"
							></img>
							<div className="image__overlay image__overlay--primary">
								<div className="image__description image__description-mobile">
									<div className="image__header2">
										<p>
											<b>UTDANNING</b>
										</p>
									</div>
									<p>
										<b>2007 - 2008</b>
									</p>
									<p>Nesbru Videregående Skole</p>
									<br></br>
									<p>
										<b>2010 - 2011</b>
									</p>
									<p>Bjørknes Privatskole</p>
								</div>
							</div>
						</div>
					</div>

					<div className="about__box">
						<div className="image2">
							<img
								className="image__jobberfaring"
								src="/jobberfaring.png"
								alt="jobberfaring"
							></img>
							<div className="image__overlay image__overlay--primary">
								<div className="image__description2 image__description2-mobile">
									<div className="image__header">
										<p>
											<b>ARBEIDSERFARING</b>
										</p>
									</div>
									<div className="image__year">
										<p>2009 – 2010</p>
										<div className="image__subtext">
											<p>Kasserer, Smart Club</p>
										</div>
									</div>
									<div className="image__year">
										<p>2014 - 2017</p>
										<div className="image__subtext">
											<p>Seniorrådgiver, Webhelp Nordic</p>
										</div>
									</div>
									<div className="image__year">
										<p>2017 - 2020</p>
										<div className="image__subtext">
											<p>Senior Technical Consultant, PasientSky AS</p>
										</div>
									</div>
									<br></br>
									<div className="image__subheader">
										<p>
											<b>ANNEN ERFARING</b>
										</p>
									</div>
									<div className="image__year">
										<p>2008</p>
										<div className="image__subtext">
											<p>Festivalmedarbeider ved Stavernsfestivalen</p>
										</div>
									</div>
									<div className="image__year">
										<p>2009</p>
										<div className="image__subtext">
											<p>Dugnadsmedarbeider for ROK</p>
										</div>
									</div>
									<br></br>
									<div className="image__subheader">
										<p>
											<b>SPRÅK</b>
										</p>
									</div>
									<div className="image__year">
										<p>NORSK</p>
										<div className="image__subtext">
											<p>Morsmål</p>
										</div>
									</div>
									<div className="image__year">
										<p>ENGELSK</p>
										<div className="image__subtext">
											<p>Svært godt</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
