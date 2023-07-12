const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { queryHandler } = require('./server_side/middlewares/query.cjs');
const {
  getAllClients,
  addSingleClient,
  deleteClient,
  updateClient,
  getSingleClient,
} = require('./server_side/controllers/clients.controlles.cjs');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = 5001;

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Route handler for getting all clients
app.get('/clients', queryHandler, getAllClients);

app.post('/submit', addSingleClient);

app.delete('/clients/:id', deleteClient);

app.put('/clients/:id', updateClient);

app.get('/clients/:id', getSingleClient);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
