const express = require('express')
const { celebrate, Segments, Joi} = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().email()
  }).unknown()
}), OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

module.exports = routes
