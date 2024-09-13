const { Schema, model } = require('mongoose');

const npcSchema = new Schema({
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
        goldPieces: {
            type: Number,
        },
        heldItem: {
            item: String,
            description: String,
        },
        information: [String],
    }],
    quirks: [String],
});

const NPC = model('NPC', npcSchema);

module.exports = NPC;