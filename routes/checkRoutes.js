import express from 'express';
import { postCheckout } from '../controllers/checkoutControllers.js';
import auth from '../middlewares/authorizationMiddleware.js';
import checkoutMiddleware from '../middlewares/checkoutMiddleware.js';

const appRoutes = express.Router();
appRoutes.post("/checkout", auth, checkoutMiddleware, postCheckout);


export default appRoutes;