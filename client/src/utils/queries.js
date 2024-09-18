import { gql } from '@apollo/client';

export const QUERY_HEROES = gql`
query Savedata {
  savedata {
    _id
    world {
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

