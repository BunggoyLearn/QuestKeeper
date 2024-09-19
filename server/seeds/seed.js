const db = require('../config/connection');
const { SaveData, World, Environment, Character } = require('../models');
const cleanDB = require('./cleanDB');

const savedata = require('./saveData.json');
const worldData = require('./worldData.json');
const enviromentData = require('./environmentData.json');
const characterData = require('./characterData.json');

db.once('open', async () => {
    // clean database
    await cleanDB("SaveData", "savedata");
    await cleanDB("World", "world");
    await cleanDB("Environment", "environments");
    await cleanDB("Character", "characters");

    await SaveData.create(savedata);
    await World.create(worldData);
    await Environment.create(enviromentData);
    await Character.create(characterData);

    console.log('all done!');
    process.exit(0);
});