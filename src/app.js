const express = require('express');
const { loginUserController, userController } = require('./controllers');
const validationLogin = require('./middleware/validationLogin');
const validationNewRegister = require('./middleware/validationNewRegister');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validationLogin, loginUserController.loginUser);
app.post('/user', validationNewRegister, userController.registerNewUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
