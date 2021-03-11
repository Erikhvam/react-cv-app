import React from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Services from "./components/Services/Services.js";
import Form from "./components/Contact/Contact.js";

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<Services />
			<Form />
		</div>
	);
};

export default App;