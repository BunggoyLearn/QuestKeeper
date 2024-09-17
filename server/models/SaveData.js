const { Schema, model } = require('mongoose');

const saveDataSchema = new Schema({
    name: {
        type: String,
    },
    world: [{ type: Schema.Types.ObjectId, ref: 'World' }],
});

const SaveData = model('SaveData', saveDataSchema);

module.exports = SaveData;