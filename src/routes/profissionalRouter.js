const express = require('express');
const profissionalController = require('../controllers/profissionalController');

const router = express.Router();

router.post('/', profissionalController.create);
router.get('/', profissionalController.getAll);
router.get('/:id', profissionalController.getById);
router.put('/:id', profissionalController.update);
router.delete('/:id', profissionalController.delete);

module.exports = router;