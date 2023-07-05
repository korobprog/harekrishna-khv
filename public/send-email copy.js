app.post('/send-email', (req, res) => {
   const name = req.body.name;

   const email = req.body.email;

   const message = req.body.message;
   console.log(req.body)

   // Отправка письма
   transporter.sendMail({
      from: email,
      to: 'makstreid@yandex.ru',
      subject: 'Новое сообщение с сайта',
      text: message
   });
});