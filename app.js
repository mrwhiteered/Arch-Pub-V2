const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path'); // Добавьте эту строку

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html')); // Изменил путь на 'form.html'
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(formData); // Данные формы будут выводиться в консоль сервера

  // Отправляем письмо на почту
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'belyaevred741@gmail.com',
      pass: 'Qwertyuiop7418634Red',
    },
  });

  const mailOptions = {
    from: 'belyaevred741@gmail.com',
    to: 'belyaevred741@gmail.com',
    subject: 'Новая заявка с формы сайта',
    text: `Имя: ${formData.name}\nEmail: ${formData.email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(`<h1>Произошла ошибка при отправке письма: ${error}</h1>`);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('<h1>Форма успешно отправлена</h1>');
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
