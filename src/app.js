const express = require('express');
const { loginUserController, userController,
  registerCategoryController, blogPostController } = require('./controllers');
const validationLogin = require('./middleware/validationLogin');
const validationNewRegister = require('./middleware/validationNewRegister');
const authorizationToken = require('./middleware/authorizationToken');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validationLogin, loginUserController.loginUser);
app.post('/user', validationNewRegister, userController.registerNewUser);
app.get('/user', authorizationToken, userController.getAllUsers);
app.get('/user/:id', authorizationToken, userController.getUserById);

app.post('/categories', authorizationToken, registerCategoryController.registerNewCategory);
app.get('/categories', authorizationToken, registerCategoryController.allCategories);

app.get('/post', authorizationToken, blogPostController.allPosts);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
