require("dotenv").config();
const path = require("path");
const express = require("express");
const transporter = require("./config");
const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
	try {
		const mailOptions = {
			from: req.body.email,
			to: process.env.email,
			subject: req.body.subject,
			html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `,
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				res.status(500).send({
					success: false,
					message: "Noe gikk galt, prøv igjen senere.",
				});
			} else {
				res.send({
					success: true,
					message:
						"Takk for at du tok kontakt. Jeg vil svare så fort som mulig.",
				});
			}
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: "Noe gikk galt, prøv igjen senere.",
		});
	}
});

app.listen(3030, () => {
	console.log("server start on port 3030");
});
