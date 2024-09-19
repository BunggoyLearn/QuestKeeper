const { Schema, model } = require('mongoose');

const worldSchema = new Schema({
    environments: [{ type: Schema.Types.ObjectId, ref: 'Environment' }],
    heroes: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
});

const World = model('World', worldSchema);

module.exports = World;