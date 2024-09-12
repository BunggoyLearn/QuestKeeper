const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    characterText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
});

const Character = model('Character', characterSchema);

module.exports = Character;