const  { ApolloServer } = require('apollo-server');
require('dotenv').config('variables.env')
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');

// Conectar a la BD
conectarDB();

const server = new  ApolloServer({ 
    typeDefs, 
    resolvers
});

server.listen({ port: process.env.PORT || 4000 }).then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`);
} )