const typeDefs = `
  type Character {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Character]
  }
`;

module.exports = typeDefs;