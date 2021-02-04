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
					<div className="about__left">
						<h2>Skole</h2>
						<div className="image1">
							<img
								className="image__utdanning"
								src="/utdanning.png"
								alt="utdanning"
							></img>
							<div className="image__overlay image__overlay--primary">
								<div className="image__description image__description-mobile">
									<p>
										<b>August 2007 - Juni 2008</b>
									</p>
									<p>Nesbru Videregående Skole</p>
									<br></br>
									<p>
										<b>August 2010 - Juni 2011</b>
									</p>
									<p>Bjørknes Privatskole</p>
								</div>
							</div>
						</div>
					</div>

					<div className="about__right">
						<h2>Arbeidserfaring</h2>
						<div className="image2">
							<img
								className="image__jobberfaring"
								src="/jobberfaring.png"
								alt="jobberfaring"
							></img>
							<div className="image__overlay image__overlay--primary">
								<div className="image__description2 image__description2-mobile">
									<div className="">
										<p>
											<b>Arbeid</b>
										</p>
										<p>
											1. sept 2009 – 1. mai 2010: Kasserer, Smart Club Slependen
										</p>
										<p>
											<p>
												10. okt 2014 - 28. feb 2017: Seniorrådgiver, Webhelp
												Nordic
											</p>
											1. mars 2017 - 1. sept 2020: Senior Technical Consultant,
											PasientSky AS
										</p>
										<br></br>
										<p>
											<b>Annen erfaring</b>
										</p>
										<p>April/Mai 2009: Dugnadsmedarbeider for ROK</p>
										<p>Juli 2008: Festivalmedarbeider ved Stavernsfestivalen</p>
										<br></br>
										<p>
											<b>Språk</b>
										</p>
										<p>Norsk: morsmål</p>
										<p>Engelsk: svært godt</p>
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

{
	/* <h1>Curriculum Vitae</h1>
					<br></br>
					<div className="cv-wrapper">
						<div className="utdanning">
							<h2>Utdanning</h2>
							<p>August 2007 - Juni 2008 Nesbru Videregående Skole</p>
							<p>August 2010 - Juni 2011 Bjørknes Privatskole</p>
						</div>
						<br></br>
						<div className="arbeidserfaring">
							<h2>Arbeidserfaring</h2>
							<p>1. sept 2009 – 1. mai 2010: Kasserer, Smart Club Slependen</p>
							<p>
								<p>
									10. okt 2014 - 28. feb 2017: Seniorrådgiver, Webhelp Nordic
								</p>
								1. mars 2017 - 1. sept 2020: Senior Technical Consultant,
								PasientSky AS
							</p>
						</div>
						<br></br>
						<br></br>
						<h3>Annen erfaring</h3>
						<p>April/Mai 2009: Dugnadsmedarbeider for ROK</p>
						<p>Juli 2008: Festivalmedarbeider ved Stavernsfestivalen.</p>
						<br></br>
						<h3>Språk</h3>
						<p>Norsk: morsmål</p>
						<p>Engelsk: svært godt</p>
					</div> */
}
