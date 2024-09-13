const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    characterText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
});

const Character = model('Character', characterSchema);

module.exports = Character;