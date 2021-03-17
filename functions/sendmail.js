const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
	"4332569409-ase0amv9h6pls3atvo89c12cgopak0oa.apps.googleusercontent.com";
const CLIENT_SECRET = "ec1CVJhCO06Mtd8R_kEWIueu";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
	"1//04ozVHfJInJ-QCgYIARAAGAQSNwF-L9Irq50I-XKNdqE7eRi8gnV60FTE1lYxGhjQ8YOifHrObVamLxQs5wcMQcMldbcJLG5uK7w";

const oAuth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

exports.handler = async function (event, context, callback) {
	let data = JSON.parse(event.body);
	const accessToken = await oAuth2Client.getAccessToken();

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

	transporter.sendMail(
		{
			from: `${data.email}`,
			to: "erikhvamdev@gmail.com",
			subject: `${data.subject}`,
			html: `
            <h3>Epost fra ${data.name}. Epost: ${data.email}<h3>
            <p>Emne: ${data.subject}<p>
            <p>Beskjed: ${data.message}<p>
            `,
		},
		function (error, info) {
			if (error) {
				callback(error);
			} else {
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						result: "success",
					}),
				});
			}
		}
	);
};
