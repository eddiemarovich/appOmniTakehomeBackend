const contactsController = require('../controllers').contacts
const contactDetailsController = require('../controllers').contactDetails


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the contacts api'
  }))

  app.post('/api/contacts', contactsController.create)
  app.get('/api/contacts', contactsController.list)
  app.get('/api/contacts/:contactId', contactsController.retrieve)
  app.put('/api/contacts/:contactId', contactsController.update)
  app.delete('/api/contacts/:contactId', contactsController.destroy)

  app.post('/api/contacts/:contactId/details', contactDetailsController.create)
  app.put('/api/contacts/:contactId/details/:contactDetailId', contactDetailsController.update)
  app.delete('/api/contacts/:contactId/details/:contactDetailId', contactDetailsController.destroy)
}
