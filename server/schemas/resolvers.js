const { SaveData, World, Environment, Character } = require('../models/index.js');

const resolvers = {
    Query: {
        characters: async () => {
            return await Character.find({});
        },
        environments: async () => {
            return await Environment.findByID({}).populate('Character');
        },
        saveData: async () => {
            return await SaveData.findByID({}).populate('Environment', 'Character');
        },
        world: async () => {
            return await World.find({});
        },
    },
    /*Mutation: {
        addWorld: async (parent, args) => {
            //const character = await Character.create(args);
            const newWorld = await World.create({});
            const firstEnvi = await Enviroment.create({
                worldId; newWorld.Id
            })
            const firstEnvi = await Enviroment.create({
                worldId; newWorld.Id
            })
            const firstEnvi = await Enviroment.create({
                worldId; newWorld.Id
            })
            const firstEnvi = await Enviroment.create({
                worldId; newWorld.Id
            })
            a
            const npcWordOne = await Character.creat({
                environmentId: firstEnvi.Id
            })
            const npcWordOne = await Character.creat({
                environmentId: firstEnvi.Id
            })
            const npcWordOne = await Character.creat({
                environmentId: firstEnvi.Id
            })
            const npcWordOne = await Character.creat({
                environmentId: firstEnvi.Id
            })
            return 'hello world';
        }
    },*/
};
module.exports = resolvers;