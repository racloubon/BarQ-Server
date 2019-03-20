const Owner = require('../../models/owner/owners.model.js');

module.exports.postOne = (req, res) => {
  Owner.create(req.body)
    .then(response => res.status(201).send(response))
    .catch(error => res.status(500).send('Error creating new owner: ', error));
};

module.exports.getOne = (req, res) => {
  const { email } = req.user;
  Owner.findOne({ email })
    .then(response => res.status(200).send(response))
    .catch(error => res.status(500).send('Error fetching owner data: ', error));
};

module.exports.deleteOne = (req, res) => {
  const { email } = req.user;
  Owner.findOneAndDelete({ email })
    .then(() => res.status(204).send())
    .catch(error => res.status(500).send('Error deleting owner: ', error));
};


// module.exports.getOne = (req, res) => {
//   Owner.findOne({ bars: { $elemMatch: { _id: "HgTaeiK_g" } } })
//     .then(response => res.status(200).send(response))
//     .catch(error => res.status(500).send('Error fetching owner data: ', error));
// };
