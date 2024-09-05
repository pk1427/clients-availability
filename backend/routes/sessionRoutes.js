// backend/routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// Schedule a session
router.post('/', async (req, res) => {
  const { user, start, end, attendees, type } = req.body;

  if (!user || !start || !end || !attendees || !type) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const session = new Session({ user, start, end, attendees, type });
    await session.save();
    res.json(session);
  } catch (error) {
    console.error('Error scheduling session:', error);
    res.status(500).send('Server error');
  }
});

// Get all sessions for a user
router.get('/:userId', async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.params.userId });
    res.json(sessions);
  } catch (error) {
    console.error('Error retrieving sessions:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;