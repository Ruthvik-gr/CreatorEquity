const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  socialMedia: { type: String },
  website: { type: String },
  followers: { type: String },
  engagementRate: { type: String },
  niche: { type: String },
  samples: { type: String },
  email: { type: String },
  brandsProducts: { type: String },
  equity: { type: String },
});

const Creator = mongoose.model('Creator', creatorSchema);
module.exports = Creator;
 