const { SaveData, World, Environment, Character } = require('../models/index.js');

const resolvers = {
    Query: {
        characters: async () => {
            return await Character.find({});
        },
        environments: async () => {
            return await Environment.findByID({}).populate('Character');
        },
    },
    Mutation: {
        addSave: async (parent, { name, World }) => {
            const createdSaveName = SaveData.create({ name });
            const createdWorld = World.map(wrld => {
                const createdEnvironments = Environment.map(env => {
                    const createdTowns = env.town.map(town => {
                        return {
                            towns: createdTowns,
                        }
                    });
                });
                const createdHeroes = Character.map(chr => {
                    const createdStatus = chr.status.map(stats => {
                        return {
                            status: createdStatus,
                        }
                    });
                    const createdHolding = chr.holding.map(held => {
                        const createdHeldItems = held.heldItem.map(hldItm => { item, description });
                        return {
                            heldItem: hldItm,
                            holding: createdHeldItems,
                            holdingCharacter: createdHolding,
                        }
                    });
                    return {
                        environments: createdEnvironments,
                        heroes: createdHeroes,
                    }
                });
                return {
                    world: createdWorld,
                }
            });
            return createdSaveName;
        },
        /*addWorld: async (parent, { environments, inhabitants }) => {
            const newWorld = await World.create({ environments, inhabitants });
            const environment = await Environment.create({
                name, terrain, weather, environmentFactor, town, quests, npcs
            });
            const npc = await Character.create({
                name, healthPoints, maxHealthPoints, manaPoints, maxManaPoints, goldPieces,
                isNPC, environment, npcAmount, status, alive, holding, quirks
            });
            
            return World.create({ environments, inhabitants })
        }*/
    },
};
module.exports = resolvers;