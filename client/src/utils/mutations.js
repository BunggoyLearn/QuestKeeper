import { gql } from "@apollo/client";

export const ADD_CHARACTER = gql`
  mutation Mutation(
    $name: String!
    $healthPoints: Int!
    $maxHealthPoints: Int!
    $manaPoints: Int!
    $maxManaPoints: Int!
    $goldPieces: Int!
    $isNpc: Boolean!
    $environment: String!
    $npcAmount: Int
    $status: [StatusInput]
    $alive: Boolean
    $holding: [HoldingInput]
    $quirks: [String]
  ) {
    addCharacter(
      name: $name
      healthPoints: $healthPoints
      maxHealthPoints: $maxHealthPoints
      manaPoints: $manaPoints
      maxManaPoints: $maxManaPoints
      goldPieces: $goldPieces
      isNPC: $isNpc
      environment: $environment
      npcAmount: $npcAmount
      status: $status
      alive: $alive
      holding: $holding
      quirks: $quirks
    ) {
      _id
      name
      healthPoints
      maxHealthPoints
      manaPoints
      maxManaPoints
      goldPieces
      isNPC
      environment
      npcAmount
      quirks
    }
  }
`;

export const ADD_ENVIRONMENT = gql`
  mutation AddEnvironmentSmall(
    $name: String!
    $terrain: String!
    $weather: String!
    $environmentFactor: String
    $town: [TownInput]
    $quests: [String]
    $npcs: [CharacterInput]
  ) {
    addEnvironmentSmall(
      name: $name
      terrain: $terrain
      weather: $weather
      environmentFactor: $environmentFactor
      town: $town
      quests: $quests
      npcs: $npcs
    ) {
      _id
      name
      terrain
      weather
      environmentFactor
      town {
        _id
        name
      }
      quests
      NPCs {
        _id
        name
        healthPoints
        maxHealthPoints
        manaPoints
        maxManaPoints
        goldPieces
        isNPC
        environment
      }
    }
  }
`;

export const ADD_WORLD = gql`
  mutation AddWorldSmall($environmentId: ID!, $heroesId: ID!) {
    addWorldSmall(environmentId: $environmentId, heroesId: $heroesId) {
      _id
      environments {
        _id
      }
      heroes {
        _id
      }
    }
  }
`;

export const ADD_SAVEDATA = gql`
  mutation AddSaveSmall($name: String!, $worldId: ID!) {
    addSaveSmall(name: $name, worldId: $worldId) {
      _id
      name
      world {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;
