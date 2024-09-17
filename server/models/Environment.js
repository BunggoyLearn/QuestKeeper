const { Schema, model } = require('mongoose');

const environmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    terrain: {
      type: String,
      required: true,
    },
    weather: {
      type: String,
      required: true,
    },
    environmentFactor: {
      type: String,
    },
    town: [{
      name: String,
    }],
    quests: [String],
    npcs: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
  }
);

const Environment = model('Environment', environmentSchema);

module.exports = Environment;
