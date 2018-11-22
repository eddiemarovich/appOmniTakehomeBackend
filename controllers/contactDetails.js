const ContactDetails = require('../models').ContactDetails

module.exports = {
  create(req, res) {
    return ContactDetails
      .create({
        nickname: req.body.nickname,
        email: req.body.email,
        number: req.body.number,
        contactId: req.params.contactId
      })
      .then(contactDetails => res.status(201).send(contactDetails))
      .catch(err => res.status(400).send(err))
  },

  update(req, res) {
    return ContactDetails
      .find({
        where: {
          id: req.params.contactDetailId,
          contactId: req.params.contactId
        }
      })
      .then(contactDetails => {
        if (!contactDetails) {
          return res.status(404).send({
            message: 'Error, what you are looking for just isn\'t here...',
          })
        }

        return contactDetails
          .update({
            nickname: req.body.nickname || contactDetails.nickname,
            email: req.body.email || contactDetails.email,
            number: req.body.number || contactDetails.number
          })
          .then((contactDetails) => res.status(200).send(contactDetails))
          .catch((err) => res.status(400).send(err))
      })
      .catch((err) => res.status(400).send(err))
  },

  destroy(req, res) {
    return ContactDetails
      .find({
        where: {
          id: req.params.contactDetailId,
          contactId: req.params.contactId
        }
      })
      .then(contactDetails => {
        if (!contactDetails) {
          return res.status(404).send({
            message: 'Whoops, nothin here.'
          })
        }
        return contactDetails
          .destroy()
          .then(() => res.status(204).send())
          .catch((err) => res.status(400).send(err))
      })
      .catch((err) => res.status(400).send(err))
  }
}
