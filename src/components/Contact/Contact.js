import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";

export default function Form() {
	const [data, setData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		sent: false,
		buttonText: "Send",
		err: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();

		setData({
			...data,
			buttonText: "Sender...",
		});

		axios
			.post("/api/sendmail", data)
			.then((res) => {
				console.log(res);
				console.log("res.status: ", res.status);
				if (res.status !== 200) {
					console.log("ikke success");
					setData({
						...data,
						buttonText: "Feil ved sending..",
						sent: false,
						err: "fail",
					});
					// setTimeout(() => {
					// 	resetForm();
					// }, 6000);
				} else {
					setData({
						...data,
						sent: true,
						buttonText: "Sendt",
						err: "success",
					});
					// setTimeout(() => {
					// 	resetForm();
					// }, 6000);
				}
			})
			.catch((err) => {
				console.log("contact.js catch");
				console.log(err.response.status);
				console.log(err);
				setData({
					...data,
					buttonText: "Feil ved sending",
					err: "fail",
				});
			});
	};

	// const resetForm = () => {
	// 	setData({
	// 		name: "",
	// 		email: "",
	// 		subject: "",
	// 		message: "",
	// 		sent: false,
	// 		buttonText: "Send",
	// 		err: "",
	// 	});
	// };

	return (
		<>
			<section id="contact">
				<h1>Kontakt</h1>
				<form>
					<fieldset>
						<label htmlFor="name">Fullt navn</label>
						<input
							type="text"
							name="name"
							value={data.name}
							onChange={handleChange}
						></input>
					</fieldset>
					<fieldset>
						<label htmlFor="email">E-post</label>
						<input
							type="text"
							name="email"
							value={data.email}
							onChange={handleChange}
						></input>
					</fieldset>
					<fieldset>
						<label htmlFor="subject">Emne</label>
						<input
							type="text"
							name="subject"
							value={data.subject}
							onChange={handleChange}
						></input>
					</fieldset>
					<fieldset>
						<label htmlFor="subject">Beskjed</label>
						<textarea
							type="text"
							name="message"
							value={data.message}
							onChange={handleChange}
						></textarea>
					</fieldset>
					<button type="submit" onClick={formSubmit}>
						{data.buttonText}
					</button>
				</form>
			</section>
		</>
	);
}
