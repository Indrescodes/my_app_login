const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
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

// Define the schema for the client info
const clientInfoSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: String,
  email: String,
});

const ClientInfo = mongoose.model('ClientInfo', clientInfoSchema);

app.get('/clients', async (req, res) => {
  try {
    const clients = await ClientInfo.find();

    res.status(200).json(clients);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while retrieving the clients' });
  }
});

app.post('/submit', async (req, res) => {
  try {
    const { name, surname, age, email } = req.body;
    console.log('Received request body:', req.body);

    const clientInfo = new ClientInfo({
      name,
      surname,
      age,
      email,
    });

    await clientInfo.save();

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while submitting the form' });
  }
});

app.delete('/clients/:id', async (req, res) => {
  try {
    const clientId = req.params.id;

    await ClientInfo.findByIdAndDelete(clientId);

    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the client' });
  }
});

app.put('/clients/:id', async (req, res) => {
  try {
    const clientId = req.params.id;

    const { name, surname, age, email } = req.body;

    await ClientInfo.findByIdAndUpdate(clientId, { name, surname, age, email });

    res.status(200).json({ message: 'Client updated successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while updating the client' });
  }
});

app.get('/clients/:id', async (req, res) => {
  try {
    const clientId = req.params.id;

    const client = await ClientInfo.findById(clientId);

    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.status(200).json(client);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the client' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
