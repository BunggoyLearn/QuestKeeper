const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    healthPoints: {
        type: Number,
        required: true,
    },
    maxHealthPoints: {
        type: Number,
        required: true,
    },
    manaPoints: {
        type: Number,
        required: true,
    },
    maxManaPoints: {
        type: Number,
        required: true,
    },
    goldPieces: {
        type: Number,
        required: true,
    },
    environment: {
        type: String,
        default: null,
    },
    npcAmount: {
        type: Number,
    },
    status: [{
        blinded: {
            Boolean,
        },
        charmed: {
            Boolean,

        },
        deafened: {
            Boolean,
        },
        exhaustion: {
            Boolean,
        },
        frightened: {
            Boolean,
        },
        grappled: {
            Boolean,
        },
        incapacitated: {
            Boolean,
        },
        invisible: {
            Boolean,
        },
        paralyzed: {
            Boolean,
        },
        petrified: {
            Boolean,
        },
        poisoned: {
            Boolean,
        },
        prone: {
            Boolean,
        },
        restrained: {
            Boolean,
        },
        stunned: {
            Boolean,
        },
        unconcious: {
            Boolean,
        },
    }],
    alive: {
        Boolean,
    },
    holding: [{
        heldItem: {
            item: String,
            description: String,
        },
    }],
    quirks: [String],
});

const Character = model('Character', characterSchema);

module.exports = Character;