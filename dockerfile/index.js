const PORT = 8080;

const express = require('express');
const server = express();

server.get('/', (req, res) => res.send(`Hola desde docker: ${req.query.name}`));

server.listen(PORT,() => console.log('Server en puerto', PORT));
