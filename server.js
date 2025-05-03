import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';  // To load environment variables from .env file
import connectDB from './db/db.js';  // MongoDB কানেকশন ইম্পোর্ট

dotenv.config();  // Make sure to load .env variables

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());  // JSON requests পাস করার জন্য

// MongoDB কানেকশন
connectDB();

// Define company schema
const companySchema = new mongoose.Schema({
  name: String,
  sector: String,
  logo: String,
  headquarters: String,
  founded: String,
});

const Company = mongoose.model('Company', companySchema);

// POST route to add company
app.post('/api/companies', async (req, res) => {
  const { name, sector, logo, headquarters, founded } = req.body;

  // Input Validation
  if (!name || !sector || !logo || !headquarters || !founded) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const newCompany = new Company({
    name,
    sector,
    logo,
    headquarters,
    founded,
  });

  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);  // Successfully saved company data
  } catch (error) {
    console.error('Error saving company:', error);
    res.status(500).json({ message: 'Failed to add company', error });
  }
});

// Start the server
const port = process.env.PORT || 8000; // Use the PORT from .env file if available, else fallback to 8000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
