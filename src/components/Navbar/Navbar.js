import React, { useState, useEffect } from "react";

import "./Navbar.scss";

//////////////////

const Navbar = () => {
	const [mobileActive, setMobileActive] = useState(false);

	const menuOnClick = (e, section) => {
		e.preventDefault();

		const linkElements = document.querySelectorAll(".link");
		[].forEach.call(linkElements, function (el) {
			el.classList.remove("is-active");
		});

		e.currentTarget.classList.add("is-active");
		const sectionEl = document.getElementById(section);
		const offsetTop = sectionEl.offsetTop;

		window.scroll({
			top: offsetTop,
			behavior: "smooth",
		});
	};

	const removeClass = () => {
		setMobileActive(false);
		const bodyEl = document.getElementById("body");
		bodyEl.classList.remove("mobile-active");
	};

	const navOnClick = () => {
		setMobileActive(!mobileActive);

		const bodyEl = document.getElementById("body");
		mobileActive
			? bodyEl.classList.remove("mobile-active")
			: bodyEl.classList.add("mobile-active");
	};

	return (
		<nav className="navbar">
			<div className="logoholder">
				<img src="/logo.png" alt="erikhvam logo"></img>
			</div>
			<ul className={!mobileActive ? "navbar-items" : "navbar-items mobile"}>
				<li>
					<a
						href="#home"
						onClick={(e) => {
							menuOnClick(e, "home");
							removeClass();
						}}
						className="link home is-active"
					>
						<span>Om meg</span>
					</a>
				</li>
				<li>
					<a
						href="#about"
						onClick={(e) => {
							menuOnClick(e, "about");
							removeClass();
						}}
						className="link about"
					>
						<span>CV</span>
					</a>
				</li>
				<li>
					<a
						href="#services"
						onClick={(e) => {
							menuOnClick(e, "services");
							removeClass();
						}}
						className="link services"
					>
						<span>Services</span>
					</a>
				</li>
				<li>
					<a
						href="#contact"
						onClick={(e) => {
							menuOnClick(e, "contact");
							removeClass();
						}}
						className="link contact"
					>
						<span>Kontakt</span>
					</a>
				</li>
				<li className="githubholder">
					<a
						href="https://github.com/Erikhvam/"
						target="_blank"
						rel="noreferrer"
					>
						<span>Github</span>
					</a>
				</li>
			</ul>
			<div>
				<div
					className={mobileActive ? "burger active" : "burger"}
					id="burgerbtn"
					onClick={() => navOnClick()}
				>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
