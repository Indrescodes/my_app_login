const ClientInfo = require('../models/clients.model.cjs');

const queryHandler = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    const data = await ClientInfo.find(req.query);

    res.json(data);
  } else {
    next();
  }
};

module.exports = { queryHandler };
