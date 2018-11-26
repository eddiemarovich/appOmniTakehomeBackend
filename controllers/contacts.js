const Contact = require('../models').Contact
const ContactDetails = require('../models').ContactDetails

module.exports = {
  create(req, res) {
    console.log(req.body);
    return Contact
      .create({
        title: req.body.title
      })
      .then(contact => res.status(201).send(contact))
      .catch(err => res.status(400).send(err))
  },

  list(req, res) {
    return Contact
      .findAll({
        include: [{
          model: ContactDetails,
          as: 'contactDetails',
        }],
      })
      .then(contacts => res.status(200).send(contacts))
      .catch(err => res.status(400).send(err))
  },

  retrieve(req, res) {
    return Contact
      .findById(req.params.contactId, {
        include: [{
          model: ContactDetails,
          as: 'contactDetails'
        }],
      })
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Woops, looks like there is no contact there...'
          })
        }
        return res.status(200).send(contact)
      })
      .catch(err => res.status(400).send(err))
  },

  update(req, res) {
    return Contact
      .findById(req.params.contactId, {
        include: [{
          model: ContactDetails,
          as: 'contactDetails'
        }]
      })
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Woops, look like theres no contact there...'
          })
        }
        return contact
          .update({
            title: req.body.title || contact.title
          })
          .then(() => res.status(200).send(contact))
          .catch((err) => res.status(400).send(err))
      })
      .catch((err) => res.status(400).send(err))
  },

  destroy(req, res) {
    return Contact
      .findById(req.params.contactId)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Woops, look like theres no contact there...'
          })
        }
        return contact
          .destroy()
          .then(() => res.status(204).send({message: 'succussully deleted contact'}))
          .catch((err) => res.status(400).send(err))
      })
      .catch((err) => res.status(400).send(err))
  }
}
