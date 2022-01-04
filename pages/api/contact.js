'use strict';

const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid'); // require('nodemailer-sendgrid');
const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);

export default async (req, res) => {
  const info = transport
    .sendMail({
      from: `${req.body.name} <kontakt@nerdistry.pl>`,
      to: 'kontakt@nerdistry.pl',
      replyTo: `${req.body.name} <${req.body.email}>`,
      subject: 'Message from Nerdistry.pl',
      html: `<h1>Hello world!</h1><h3>Message from ${req.body.name} (${req.body.email})</h3><p>${req.body.message}</p>`,
    })
    .then(([res]) => {
      console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
    })
    .catch((err) => {
      console.log('Errors occurred, failed to deliver message');

      if (err.response && err.response.body && err.response.body.errors) {
        err.response.body.errors.forEach((error) => console.log('%s: %s', error.field, error.message));
      } else {
        console.log(err);
      }
    });
};
