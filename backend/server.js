require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// Note: In newer mongoose versions, useNewUrlParser and useUnifiedTopology are default, but keeping for compatibility if needed.
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/madfin')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'MADFIN API is running', status: 'online' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
