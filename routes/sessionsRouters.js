import express from 'express';
import * as sessionsController from '../controllers/sessionsControllers.js';

const router = express.Router();


//anexando essas rotas na rota da aplicação
router.post('/status', sessionsController.status);

export default router;
