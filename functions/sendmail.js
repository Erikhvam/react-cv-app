const nodemailer = require("nodemailer");

exports.handler = function (event, context, callback) {
	let data = JSON.parse(event.body);

	let transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		secureConnection: false,
		port: "465",
		auth: {
			user: process.env.email,
			pass: process.env.password,
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
