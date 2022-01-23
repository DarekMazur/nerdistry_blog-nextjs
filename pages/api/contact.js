const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);

export default async (req, res) => {
  const mailMail = {
    from: `Nerdistry - ${req.body.name} <notification@nerdistry.pl>`,
    to: 'kontakt@nerdistry.pl',
    replyTo: `${req.body.name} <${req.body.email}>`,
    subject: `Nerdistry.pl - Message from ${req.body.name}`,
    text: `${req.body.name} (${req.body.email}) wrote: ${req.body.message}`,
    html: `<h1>Hello Nerdistry!</h1>
    <h3>You got new mesage from ${req.body.name} (${req.body.email})</h3>
    <p>${req.body.message}</p>`,
  };

  const confirmMail = {
    from: `Nerdistry <no-replay@nerdistry.pl>`,
    to: `${req.body.name} <${req.body.email}>`,
    subject: `Hej ${req.body.name}, dziękuję za wiadomość!`,
    text: `Cześć ${req.body.name}, Twoja wiadomość z nerdistry.pl zostala wysłana: "${req.body.message}"`,
    html: `<h1>Cześć ${req.body.name}</h1>
    <h3>Dziękuję za wiadomość, ${req.body.name}!</h3>
    <p>Na 100% ją przeczytam i postaram się odpowiedzieć!</p>
    <p>Pozdrawiam,</p>
    <p>Gacek</p>
    <p>Poniżej możesz sprawdzić treść Twojej wiadomości:</p>
    <p>"${req.body.message}"</p>`,
  };

  Promise.all([transport.sendMail(mailMail), transport.sendMail(confirmMail)])
    .then(([res]) => {
      console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
      return res.end();
    })
    .catch((err) => {
      console.log('Errors occurred, failed to deliver message');

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach((error) => console.log('%s: %s', error.field, error.message));
      } else {
        console.log(err);
      }

      return res.end();
    });
};
