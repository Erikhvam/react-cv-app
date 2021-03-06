const nodemailer = require("nodemailer");
const { google } = require("googleapis");

process.env.TZ = "Europe/Oslo";

const CLIENT_ID =
	"4332569409-ase0amv9h6pls3atvo89c12cgopak0oa.apps.googleusercontent.com";
const CLIENT_SECRET = "ec1CVJhCO06Mtd8R_kEWIueu";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
	"1//040xPIGjhysoGCgYIARAAGAQSNwF-L9IrWhQ6P_6vpE_GcGsez_l92CLwqTZ4tuFvlVH9x_yX-dhRYY98vSsBv3BEMZRsG73W7rg";

const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.handler = async (event) => {
	try {
		let data = JSON.parse(event.body);
		let accessToken = await oAuth2Client.getAccessToken();
		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: "erikhvamdev@gmail.com",
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REFRESH_TOKEN,
				accessToken: accessToken,
				// pass: process.env.password,
			},
		});

		const mailOptions = {
			from: "erikhvamdev@gmail.com",
			to: "erikhvamdev@gmail.com",
			subject: `${data.subject}`,
			text: `${data.message}`,
			html: `
			<h3>Epost fra ${data.name}. Epost: ${data.email}<h3>
			<p>Emne: ${data.subject}<p>
			<p>Beskjed: ${data.message}<p>
			`,
		};

		const result = await transporter.sendMail(mailOptions);
		return (
			null,
			{
				statusCode: 200,
				body: JSON.stringify(result),
			}
		);
	} catch (error) {
		console.log("Error");
		console.log(error);
	}
};
