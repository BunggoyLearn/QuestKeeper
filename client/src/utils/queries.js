import { gql } from '@apollo/client';

export const QUERY_HEROES = gql`
query Characters {
  characters {
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

export const QUERY_ENVIRONMENT = gql`
query Environments {
  environments {
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
      npcAmount
      status {
        blinded
        charmed
        deafened
        exhaustion
        frightened
        grappled
        incapacitated
        invisible
        paralyzed
        petrified
        poisoned
        prone
        restrained
        stunned
        unconcious
      }
      alive
      holding {
        heldItem {
          item
          description
        }
      }
      quirks
    }
  }
}
`;

export const QUERY_WORLD = gql`
query World {
  world {
    _id
    environments {
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
        npcAmount
        status {
          blinded
          charmed
          deafened
          exhaustion
          frightened
          grappled
          incapacitated
          invisible
          paralyzed
          petrified
          poisoned
          prone
          restrained
          stunned
          unconcious
        }
        alive
        holding {
          heldItem {
            item
            description
          }
        }
        quirks
      }
    }
    heroes {
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
      status {
        blinded
        charmed
        deafened
        exhaustion
        frightened
        grappled
        incapacitated
        invisible
        paralyzed
        petrified
        poisoned
        prone
        restrained
        stunned
        unconcious
      }
      alive
      holding {
        heldItem {
          item
          description
        }
      }
      quirks
    }
  }
}
`;

export const QUERY_SAVEDATA = gql`
query SaveData {
  saveData {
    _id
    name
    world {
      _id
      environments {
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
          npcAmount
          status {
            blinded
            charmed
            deafened
            exhaustion
            frightened
            grappled
            incapacitated
            invisible
            paralyzed
            petrified
            poisoned
            prone
            restrained
            stunned
            unconcious
          }
          alive
          holding {
            heldItem {
              item
              description
            }
          }
          quirks
        }
      }
      heroes {
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
        status {
          blinded
          charmed
          deafened
          exhaustion
          frightened
          grappled
          incapacitated
          invisible
          paralyzed
          petrified
          poisoned
          prone
          restrained
          stunned
          unconcious
        }
        alive
        holding {
          heldItem {
            item
            description
          }
        }
        quirks
      }
    }
  }
}
`;

export const QUERY_SINGLEHERO = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

