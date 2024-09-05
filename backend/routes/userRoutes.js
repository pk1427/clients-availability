const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to login or register a user
router.post('/login', async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    
    // If the user doesn't exist, create one
    if (!user) {
      user = new User({ email, password: 'password' }); // Use a placeholder password
      await user.save();
    }

    // Send back the user data (without the password)
    res.json({
      _id: user._id,
      email: user.email
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to get all users (for Admin purposes)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
