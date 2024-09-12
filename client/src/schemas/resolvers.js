const { Character } = require('../../../server/models');

const resolvers = {
    Query: {
        classes: async () => {
            return await Character.find({});
        }
    }
};

module.exports = resolvers;