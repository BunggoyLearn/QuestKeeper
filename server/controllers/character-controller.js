const { Character } = require('../models');

export async function getAllChracters(req, res) {
    const allCharacters = await Character.find({});

    if (!allCharacters) {
        return res.status(400).json({ message: 'No characters found' });
    }
    res.status(200).json(allCharacters);
}