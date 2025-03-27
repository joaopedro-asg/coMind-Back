const Profissional = require('../models/profissionalModel');

const profissionalController = {

  create: async (req, res) => {
    try {
      const profissional = await Profissional.create(req.body);
      res.json(profissional);
    } 
    catch (error) 
    {
      res.status(500).json({ error: error.message }); //caso tenha algum erro
    }
  },

  getAll: async (req, res) => {
    try {
      const profissionais = await Profissional.findMany();
      res.json(profissionais);
    } 
    catch (error) 
    {
      res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const profissional = await Profissional.findUnique(req.params.id);
      if (!profissional) {
        return res.status(404).json({ error: 'Profissional não encontrado' });
      }
      res.json(profissional);
    } 
    catch (error) 
    {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const profissional = await Profissional.update(req.params.id, req.body);
      res.json(profissional);
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      await Profissional.delete(req.params.id);
      res.json({ message: 'Profissional deletado com sucesso' });
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = profissionalController;