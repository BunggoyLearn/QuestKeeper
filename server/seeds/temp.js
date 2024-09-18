Mutation: {
    addWorld: async (parent, { environments, inhabitants }) => {
        const newWorld = await World.create({ environments, inhabitants });
        const firstEnvi = await Environment.create({
            worldID: newWorld.Id,
            name: 'Alvalon',
            terrain: 'Plains',
            weather: 'temperate',
            environmentFactor: 'none',
            town: ['The Reach', 'Applesdale'],
            quests: ["Clear out the rats in the tavern's basement", "Retrieve the Jet Amulet for Mary"],
            npcs: [{ $npcOne }]
        })
        const secondEnvi = await Environment.create({
            worldID: newWorld.Id,
            name: 'The Forest of Myria',
            terrain: 'Forest',
            weather: 'cold, rainy',
            environmentFactor: 'Rainfall: Fire damage reduced by 20%',
            town: ['Myrian Keep'],
            quests: ["Slay the goblin encampment outside the town's gate", "Find the 'Herb of life' for James"],
            npcs: [{ $npcOne }]
        })
        const thirdEnvi = await Environment.create({
            worldID: newWorld.Id,
            name: 'The Mines',
            terrain: 'Cave',
            weather: 'Hot, arid',
            environmentFactor: 'Trapped Gasses: All explosions have double radius',
            quests: ["Bring back gold sample for Edward", "Activate the Amethyst Golem"],
            npcs: [{ $npcOne }]
        })
        const fourthEnvi = await Environment.create({
            worldID: newWorld.Id,
            name: 'Bogs of Gummreach',
            terrain: 'Swamps',
            weather: 'Foggy, Humid, Warm',
            environmentFactor: 'Wall of Fog: Reduce party sight by 5 tiles',
            town: ["Gumm's Retreat"],
            quests: ["Talk to Gumm"],
            npcs: [{ $npcOne }]
        })
        const npcOne = await Character.create({
            environmentId: firstEnvi.Id,
            name: 'Mary',
            healthpoints: 50,
            maxHealthPoints: 50,
            manaPoints: 0,
            maxManaPoints: 0,
            goldPieces: 15,
            isNPC: true,
            environment: Alvalon,
            npcAmount: 1,
            status: [{ $NPCbasestatus }],
            alive: true,
            // holding: [
            //     heldItem: {
            //         item: "Mary's Ring",
            //         description: "A simple band made of copper worn by a wedded peasant",
            //     },
            // ],
            quirks: ['A simple woman with no knowledge of the outside world'],
        })
        const npcTwo = await Character.create({
            environmentId: secondEnvi.Id,
            name: 'Mary',
            healthpoints: 50,
            maxHealthPoints: 50,
            manaPoints: 0,
            maxManaPoints: 0,
            goldPieces: 15,
            isNPC: true,
            environment: Alvalon,
            npcAmount: 1,
            status: [{ $NPCbasestatus }],
            alive: true,
            // holding: [
            //     heldItem: {
            //         item: "Mary's Ring",
            //         description: "A simple band made of copper worn by a wedded peasant",
            //     },
            // ],
            quirks: ['A simple woman with no knowledge of the outside world'],
        })
        const npcThree = await Character.create({
            environmentId: thirdEnvi.Id,
            name: 'Mary',
            healthpoints: 50,
            maxHealthPoints: 50,
            manaPoints: 0,
            maxManaPoints: 0,
            goldPieces: 15,
            isNPC: true,
            environment: Alvalon,
            npcAmount: 1,
            status: [{ $NPCbasestatus }],
            alive: true,
            // holding: [
            //     heldItem: {
            //         item: "Mary's Ring",
            //         description: "A simple band made of copper worn by a wedded peasant",
            //     },
            // ],
            quirks: ['A simple woman with no knowledge of the outside world'],
        })
        const npcFour = await Character.create({
            environmentId: fourthEnvi.Id,
            name: 'Mary',
            healthpoints: 50,
            maxHealthPoints: 50,
            manaPoints: 0,
            maxManaPoints: 0,
            goldPieces: 15,
            isNPC: true,
            environment: Alvalon,
            npcAmount: 1,
            status: [{ $NPCbasestatus }],
            alive: true,
            // holding: [
            //     heldItem: {
            //         item: "Mary's Ring",
            //         description: "A simple band made of copper worn by a wedded peasant",
            //     },
            // ],
            quirks: ['A simple woman with no knowledge of the outside world'],
        })
        return 'hello world';
    }
}
