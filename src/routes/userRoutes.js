import express from 'express';
import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router.use(authMiddleware.authenticate);

router.get('/', userController.listarUsuario);
router.get('/:id', userController.buscarUsuarioPorId);
router.get('/email/:email', userController.buscarUsuarioPorEmail);
router.put('/:id', userController.atualizarUsuario);
router.delete('/:id', userController.excluirUsuario);

//MARK: - Melhorar
router.get("/profile", (req, res) => {
    res.json({ message: "Bem-vindo ao seu perfil!", user: req.user });
});

router.get("/admin", authMiddleware.verificarAdmin, (req, res) => {
    res.json({ message: "Bem-vindo, administrador!", user: req.user });
});

router.get("/profissional", authMiddleware.verificarProfissional, (req, res) => {
    res.json({ message: "Bem-vindo, profissional!", user: req.user });
});

router.get("/paciente", authMiddleware.verificarPaciente, (req, res) => {
    res.json({ message: "Bem-vindo, paciente!", user: req.user });
});

export default router;