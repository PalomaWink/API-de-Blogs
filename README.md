# Blogs API

Este projeto é uma API e um banco de dados para a produção de conteúdo para um blog!
Foi desenvolvido uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.
Para os endpoints foi utilizada os principios do `REST` e para efetuar login foi utilizado `JWT` para autenticação de usuário.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [JWT](https://jwt.io/)

## Estrutura do Projeto

O projeto segue a estrutura de pastas MVC (Model-View-Controller), com a adição de serviços e middlewares.

- `src/controllers`: Contém os controladores que lidam com as solicitações HTTP e enviam respostas.
- `src/models`: Contém os modelos Sequelize que correspondem às tabelas do banco de dados.
- `src/services`: Contém a lógica de negócios e interage com os modelos.
- `src/middleware`: Contém funções de middleware para lidar com autenticação e autorização.

## Autenticação

A autenticação é feita usando JSON Web Tokens (JWT). Quando um usuário se registra ou faz login, um token JWT é gerado e enviado de volta ao usuário. Este token deve ser incluído no cabeçalho Authorization das solicitações subsequentes.

## Docker

Este projeto usa Docker para containerização. O arquivo Dockerfile contém as instruções para criar a imagem Docker, e o arquivo docker-compose.yml é usado para definir os serviços.

## Scripts

O arquivo package.json contém vários scripts que podem ser executados com `npm run <script>`:

- `start`: Inicia o servidor em modo de produção.
- `dev`: Inicia o servidor em modo de desenvolvimento com o nodemon.
- `test`: Executa os testes com Jest.
- `lint`: Executa o linter ESLint.

## Banco de Dados

Este projeto usa Sequelize, um ORM para Node.js, para interagir com o banco de dados MySQL. As configurações do Sequelize estão no arquivo .sequelizerc.

## Como Executar o Projeto

1. Instale as dependências com `npm install`.
2. Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.
3. Use o comando `docker exec -it blogs_api bash` para ter acesso ao terminal interativo
4. Instale as dependências com `npm install` dentro do container também.
5. Rode os `scripts` dentro do container.

## Contribuições

Este projeto é para fins educacionais, portanto, pull requests não serão aceitos.

## Licença

MIT
