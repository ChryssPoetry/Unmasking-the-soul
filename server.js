const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/database');
const Church = require('./models/Church');
const Member = require('./models/Member');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.post('/api/register-church', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if church already exists
    const existingChurch = await Church.findOne({
      $or: [{ name }, { adminEmail }]
    });

    if (existingChurch) {
      return res.status(400).json({
        error: 'Church name or admin email already exists'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new church
    const church = new Church({
      name,
      adminEmail: email,
      password: hashedPassword
    });

    await church.save();

    // Generate JWT
    const token = jwt.sign(
      { churchId: church._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ success: true, token });
  } catch (error) {
    console.error('Error registering church:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login-church', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find church
    const church = await Church.findOne({ adminEmail: email });
    if (!church) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, church.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { churchId: church._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ success: true, token });
  } catch (error) {
    console.error('Error logging in church:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/churches', async (req, res) => {
  try {
    const churches = await Church.find().select('name');
    res.json(churches);
  } catch (error) {
    console.error('Error fetching churches:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/save-response', async (req, res) => {
  try {
    const { username, scores, vibe } = req.body;
    const churchId = req.headers.authorization?.split(' ')[1];

    if (!churchId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify JWT
    const decoded = jwt.verify(churchId, process.env.JWT_SECRET || 'your-secret-key');
    const church = await Church.findById(decoded.churchId);

    if (!church) {
      return res.status(404).json({ error: 'Church not found' });
    }

    // Create new member
    const member = new Member({
      churchId: church._id,
      username,
      scores,
      vibe
    });

    await member.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving response:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/church-responses/:churchId', async (req, res) => {
  try {
    const { churchId } = req.params;
    const responses = await Member.find({ churchId });
    res.json(responses);
  } catch (error) {
    console.error('Error fetching church responses:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});