const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const scheduleRoutes = require('./routes/scheduleRoutes');
const userRoutes = require('./routes/userRoutes');
const availabilityRoutes = require('./routes/availabilityRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors({
  origin: ['https://clients-availability-1.onrender.com', 'https://clients-availability-z1cg.vercel.app'], // Add all frontend URLs here
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/schedule', scheduleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/sessions', sessionRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Default error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
