const Character = require('../models/index.js');

const resolvers = {
    Query: {
        classes: async () => {
            return await Character.find({});
        }
    },
    /*Mutation: {
        addCharacter: async (parent, args) => {
            //const character = await Character.create(args);
            return 'hello world';
        }
    },*/
};

module.exports = resolvers;