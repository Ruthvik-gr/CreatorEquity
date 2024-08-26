const express = require('express');
const Creator = require('../models/creatorModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const creator = new Creator(req.body);
    await creator.save();
    res.status(201).json(creator);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const creators = await Creator.find();
    res.json(creators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const creator = await Creator.findById(req.params.id);
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    res.json(creator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const creator = await Creator.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    res.json(creator);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const creator = await Creator.findByIdAndDelete(req.params.id);
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    res.json({ message: 'Creator deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
