const ClientInfo = require('../models/clients.model.cjs');

const getAllClients = async (req, res) => {
  try {
    const clients = await ClientInfo.find();

    res.status(200).json(clients);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while retrieving the clients' });
  }
};

const getSingleClient = async (req, res) => {
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
};

const addSingleClient = async (req, res) => {
  try {
    const { name, surname, age, email } = req.body;

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
};

const updateClient = async (req, res) => {
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
};

const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    await ClientInfo.findByIdAndDelete(clientId);

    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the client' });
  }
};

module.exports = {
  getAllClients,
  getSingleClient,
  addSingleClient,
  updateClient,
  deleteClient,
};
