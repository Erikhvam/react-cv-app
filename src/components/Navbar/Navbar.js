import React, { useState } from "react";

import "./Navbar.scss";

//////////////////

// // cache the navigation links
// var navigationLinks = document.querySelectorAll("nav > ul > li > a");
// // cache (in reversed order) the sections
// var sections = document.getElementsByTagName("section");

// // map each section id to their corresponding navigation link
// var sectionIdTonavigationLink = {};
// for (var i = sections.length - 1; i >= 0; i--) {
// 	var id = sections[i].id;
// 	sectionIdTonavigationLink[id] =
// 		document.querySelectorAll("nav > ul > li > a[href=\\#" + id + "]") || null;
// }

// // throttle function, enforces a minimum time interval
// function throttle(fn, interval) {
// 	var lastCall, timeoutId;
// 	return function () {
// 		var now = new Date().getTime();
// 		if (lastCall && now < lastCall + interval) {
// 			// if we are inside the interval we wait
// 			clearTimeout(timeoutId);
// 			timeoutId = setTimeout(function () {
// 				lastCall = now;
// 				fn.call();
// 			}, interval - (now - lastCall));
// 		} else {
// 			// otherwise, we directly call the function
// 			lastCall = now;
// 			fn.call();
// 		}
// 	};
// }

// function getOffset(el) {
// 	var _x = 0;
// 	var _y = 0;
// 	while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
// 		_x += el.offsetLeft - el.scrollLeft;
// 		_y += el.offsetTop - el.scrollTop;
// 		el = el.offsetParent;
// 	}
// 	return { top: _y, left: _x };
// }

// function highlightNavigation() {
// 	// get the current vertical position of the scroll bar
// 	var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// 	// iterate the sections
// 	for (var i = sections.length - 1; i >= 0; i--) {
// 		var currentSection = sections[i];
// 		// get the position of the section
// 		var sectionTop = getOffset(currentSection).top;

// 		// if the user has scrolled over the top of the section
// 		if (scrollPosition >= sectionTop - 250) {
// 			// get the section id
// 			var id = currentSection.id;
// 			// get the corresponding navigation link
// 			var navigationLink = sectionIdTonavigationLink[id];
// 			// if the link is not active
// 			if (typeof navigationLink[0] !== "undefined") {
// 				if (!navigationLink[0].classList.contains("is-active")) {
// 					// remove .active class from all the links
// 					for (i = 0; i < navigationLinks.length; i++) {
// 						navigationLinks[i].className = navigationLinks[i].className.replace(
// 							"is-active",
// 							""
// 						);
// 					}
// 					// add .active class to the current link
// 					navigationLink[0].className += "is-active";
// 				}
// 			} else {
// 				// remove .active class from all the links
// 				for (i = 0; i < navigationLinks.length; i++) {
// 					navigationLinks[i].className = navigationLinks[i].className.replace(
// 						"is-active",
// 						""
// 					);
// 				}
// 			}
// 			// we have found our section, so we return false to exit the each loop
// 			return false;
// 		}
// 	}
// }

// window.addEventListener("scroll", throttle(highlightNavigation, 150));

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
