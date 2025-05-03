import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js'; // Corrected import for named export

dotenv.config({ path: './.env' }); // Load environment variables

const port = process.env.PORT || 8000; // Use the PORT from .env file

// Connect to the database and start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is Running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection failed!!!', error);
  });
