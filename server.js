const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('c0224g1.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3300;

server.listen(PORT, () => {
  console.log('JSON Server is running');
  console.log('=> http://localhost:' + PORT);
});
