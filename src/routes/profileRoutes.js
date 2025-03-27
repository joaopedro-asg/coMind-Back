import express from 'express';
import * as profileController from '../controllers/profileController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get("/", authMiddleware.authenticate, profileController.getProfile);
router.put("/", authMiddleware.authenticate, profileController.updateProfile);

export default router;
