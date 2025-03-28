import express from 'express';
import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
const router = express.Router();

router.use(authMiddleware.authenticate);

// somente ADMIN
router.get('/', authMiddleware.verificarAdmin, userController.listarUsuario);
router.get('/:id', authMiddleware.verificarAdmin, userController.buscarUsuarioPorId);
router.get('/email/:email', authMiddleware.verificarAdmin, userController.buscarUsuarioPorEmail);
router.put('/:id', authMiddleware.verificarAdmin, userController.atualizarUsuario);
router.delete('/:id', authMiddleware.verificarAdmin, userController.excluirUsuario);

export default router;
