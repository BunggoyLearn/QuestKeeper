import { gql } from '@apollo/client';

export const ADD_CHARACTER = gql`
mutation Mutation($name: String!, $healthPoints: Int!, $maxHealthPoints: Int!, $manaPoints: Int!, $maxManaPoints: Int!, $goldPieces: Int!, $isNpc: Boolean!, $environment: String!, $npcAmount: Int, $status: [StatusInput], $alive: Boolean, $holding: [HoldingInput], $quirks: [String]) {
  addCharacter(name: $name, healthPoints: $healthPoints, maxHealthPoints: $maxHealthPoints, manaPoints: $manaPoints, maxManaPoints: $maxManaPoints, goldPieces: $goldPieces, isNPC: $isNpc, environment: $environment, npcAmount: $npcAmount, status: $status, alive: $alive, holding: $holding, quirks: $quirks) {
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
  }
`;

export const ADD_ENVIRONMENT = gql`
mutation AddEnvironmentSmall($name: String!, $terrain: String!, $weather: String!, $environmentFactor: String, $town: [TownInput], $quests: [String], $npcs: [CharacterInput]) {
  addEnvironmentSmall(name: $name, terrain: $terrain, weather: $weather, environmentFactor: $environmentFactor, town: $town, quests: $quests, npcs: $npcs) {
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

`;

export const ADD_SAVEDATA = gql`

`;