const express = require('express');
const router = express.Router();
const personasController = require('../controllers/persons.controller');

router
  .get('/', personasController.get)
  .get('/:id', personasController.getById)
  .post('/', personasController.create)
  .put('/:id', personasController.update)
  .delete('/:id', personasController._delete);

module.exports = router;