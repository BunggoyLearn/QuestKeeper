const { Character } = require('../models');

const resolvers = {
    Query: {
        classes: async () => {
            return await Character.find({});
        }
    }
};

module.exports = resolvers;