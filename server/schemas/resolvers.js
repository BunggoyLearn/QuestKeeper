const { User, SaveData, World, Environment, Character } = require('../models/index.js');

const resolvers = {
    Query: {
        characters: async () => {
            return await Character.find({});
        },
        environments: async () => {
            return await Environment.find({})
        },
        saveData: async () => {
            return await SaveData.find({})
        },
        saveDataSingle: async (parent, args) => {
            return await SaveData.findByID(args.id).populate('environments', 'heroes');
        },
        world: async () => {
            return await World.find({});
        },
        character: async (parent, args) => {
            // Use the parameter to find the matching class in the collection
            return await Character.findById(args.id);
        },
        environment: async (parent, args) => {
            // Use the parameter to find the matching class in the collection
            return await Environment.findById(args.id).populate({
                path: 'Character',
                match: { isNPC: { $ne: false } },
            })
        },
    },
    Mutation: {
        /*addSave: async (parent, { name, World }) => {
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
        },*/
        // ALL OF THESE SMALL UNS ARE FRONT END SET IN ORDER
        // Save first the bottom up
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addSaveSmall: async (parent, { name, worldId }) => {
            console.log(worldId);
            let currentSave = await SaveData.create({ name });
            return await SaveData.findOneAndUpdate(
                { _id: currentSave._id },
                { $addToSet: { world: worldId } },
                { new: true }
            );
        },
        //Front end does this last
        addWorldSmall: async (parent, { environmentId, heroesId }) => {
            let currentworld = await World.create({});
            return await World.findOneAndUpdate(
                { _id: currentworld._id },
                { $addToSet: { enviroments: environmentId, heroes: heroesId } },
                { new: true }
            );
        },
        addEnvironmentSmall: async (parent, args) => {
            let currentEnvironment = await Environment.create({ ...args });
            return await Environment.findOneAndUpdate(
                { _id: currentEnvironment._id },
                { $addToSet: { NPCs: args.characterId, } },
                { new: true }
            );
        },
        addCharacter: async (parent, { name, healthPoints, maxHealthPoints, manaPoints, maxManaPoints, goldPieces, isNPC, environment, npcAmount, status, alive, holding, quirks }) => {
            return await Character.create({ name, healthPoints, maxHealthPoints, manaPoints, maxManaPoints, goldPieces, isNPC, environment, npcAmount, status, alive, holding, quirks })
        },
        /*
        Create Characters
        Create Environment
        Create World
        Create-SaveData
        */

        /*addCharacter: async (parent, { name, healthPoints, maxHealthPoints, manaPoints, maxManaPoints, goldPieces, isNPC, environment, npcAmount, status, alive, holding, quirks }) => {
            return await Character.create({ name, healthPoints, maxHealthPoints, manaPoints, maxManaPoints, goldPieces, isNPC, environment, npcAmount, status, alive, holding, quirks })
        }*/

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