const typeDefs = `
  #outputs  
  type Character {
    _id: ID
    name: String!
    healthPoints: Int!
    maxHealthPoints: Int!
    manaPoints: Int!
    maxManaPoints: Int!
    goldPieces: Int!
    isNPC: Boolean
    environment: String
    npcAmount: Int
    status: [Status]
    alive: Boolean
    holding: [holding]
    quirks: [String]

  }

  type Status {
    blinded: Boolean
    charmed: Boolean
    deafened: Boolean
    exhaustion: Boolean
    frightened: Boolean
    grappled: Boolean
    incapacitated: Boolean
    invisible: Boolean
    paralyzed: Boolean
    petrified: Boolean
    poisoned: Boolean
    prone: Boolean
    restrained: Boolean
    stunned: Boolean
    unconcious: Boolean
  }

  type holding {
    heldItem: [heldItem]
  }

  type heldItem {
    item: String!
    description: String!
  }

  type Environment {
    _id: ID
    name: String!
    terrain: String!
    weather: String!
    environmentFactor: String
    town: [Town]
    quests: [String]
    NPCs: [Character]
  }

  type Town {
    _id: ID
    name: String
  }

  type World {
    _id: ID!
    environments: [Environment]
    heroes: [Character]
  }

  type SaveData {
    _id: ID!
    name: String!
    world: [World]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedata: [SaveData]!
  }

  type Query {
    characters: [Character]
    environments: [Environment]
    world: [World]
    saveData: [SaveData]
    users: [User]
    saveDataSingle(id: ID!) : SaveData
    user(username: String!): User
    character(id: ID!) : Character
    environment(id: ID!) : Environment
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSave(input: SaveDataInput! ) : SaveData
    addSaveSmall(name: String!, worldId: ID!) : SaveData
    addWorldSmall(environmentId: ID!, heroesId: ID!) : World
    addEnvironmentSmall(name: String!, terrain: String!, weather: String!, environmentFactor: String, town: [TownInput], quests: [String], npcs: [CharacterInput] ) : Environment
    addCharacter(name: String!, healthPoints: Int!, maxHealthPoints: Int!, manaPoints: Int!, maxManaPoints: Int!, goldPieces: Int!, isNPC: Boolean!, environment: String!, npcAmount: Int, status: [StatusInput], alive: Boolean, holding: [HoldingInput], quirks: [String]) : Character
  }

#inputs

  input CharacterInput {
    _id: ID
    name: String!
    healthPoints: Int!
    maxHealthPoints: Int!
    manaPoints: Int!
    maxManaPoints: Int!
    goldPieces: Int!
    isNPC: Boolean
    environment: String
    npcAmount: Int
    status: [StatusInput]
    alive: Boolean
    holding: [HoldingInput]
    quirks: [String]
  }

  input StatusInput {
    blinded: Boolean
    charmed: Boolean
    deafened: Boolean
    exhaustion: Boolean
    frightened: Boolean
    grappled: Boolean
    incapacitated: Boolean
    invisible: Boolean
    paralyzed: Boolean
    petrified: Boolean
    poisoned: Boolean
    prone: Boolean
    restrained: Boolean
    stunned: Boolean
    unconcious: Boolean
  }

  input HoldingInput {
    heldItem: [heldItemInput]
  }

  input heldItemInput {
    item: String!
    description: String!
  }

  input EnvironmentInput {
    _id: ID
    name: String!
    terrain: String!
    weather: String!
    environmentFactor: String
    town: [TownInput]
    quests: [String]
    NPCs: [CharacterInput]
  }

  input TownInput {
    _id: ID
    name: String
  }

  input WorldInput {
    _id: ID!
    environments: [EnvironmentInput]
    heroes: [CharacterInput]
  }

  input SaveDataInput {
    _id: ID!
    name: String!
    world: [WorldInput]
  }
`;

module.exports = typeDefs;