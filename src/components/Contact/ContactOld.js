import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";

const ContactForm = () => {
	const [content, setContent] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [result, setResult] = useState(null);

	const sendEmail = (event) => {
		event.preventDefault();
		axios
			.post("/send", { ...content })
			.then((response) => {
				setResult(response.data);
				setContent({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			})
			.catch(() => {
				setResult({
					success: false,
					message: "Noe gikk galt, vennligst prøv igjen senere..",
				});
			});
	};

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setContent({
			...content,
			[name]: value,
		});
	};

	return (
		<>
			<section id="contact">
				<h1>Kontakt</h1>
				{result && (
					<p className={`${result.success ? "success" : "error"}`}>
						{result.message}
					</p>
				)}
				<form onSubmit={sendEmail}>
					<fieldset>
						<label htmlFor="name">Fullt navn</label>
						<input
							type="text"
							name="name"
							value={content.name}
							// placeholder="Fullt navn"
							onChange={onInputChange}
						></input>
					</fieldset>
					<fieldset>
						<label htmlFor="email">E-post</label>
						<input
							type="text"
							name="email"
							value={content.email}
							// placeholder="Fyll ut din e-post"
							onChange={onInputChange}
						></input>
					</fieldset>
					<fieldset>
						<label htmlFor="subject">Emne</label>
						<input
							type="text"
							name="subject"
							value={content.subject}
							// placeholder="Fyll inn emne"
							onChange={onInputChange}
						></input>
					</fieldset>
					<fieldset>
						<label htmlFor="subject">Beskjed</label>
						<textarea
							name="message"
							value={content.message}
							// placeholder="Fyll inn din beskjed her"
							onChange={onInputChange}
						></textarea>
					</fieldset>
					<button type="submit">Send</button>
				</form>
			</section>
		</>
	);
};

export default ContactForm;
