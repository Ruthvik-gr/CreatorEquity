const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  industry: { type: String },
  description: { type: String },
  website: { type: String },
  contactPerson: { type: String },
  email: { type: String },
  equity: { type: String },
  needsGoals: { type: String },
  fundingStage: { type: String },
  targetAudience: { type: String },

});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;
