const typeDefs = `
  type Character {
    _id: ID
    name: String
  }

  type Query {
    classes: [Character]
  }
`;

module.exports = typeDefs;