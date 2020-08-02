const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
  type Query {
    pokemon: Pokemon!
  }

  type Pokemon {
    name: String!
    type: String!
  }

  type Mutation {
    addPokemon(name: String!, type: String!): ID!
  }
`;

const resolvers = {
  Query: {
    pokemon: () => ({
      name: "Bulbasaur",
      type: "Fire",
    }),
  },
  Mutation: {
    addPokemon: (_, { name, type }) => `ID: ${name}:${type}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on http://localhost:4000"));
