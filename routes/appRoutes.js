import express from 'express';
import { getProducts, putInTheCart } from '../controllers/appControllers.js';
import authorizationMiddleware from '../middlewares/authorizationMiddleware.js';
import putInTheCartMiddleware from '../middlewares/putInTheCartMiddleware.js';

const appRoutes = express.Router();
appRoutes.post("/", authorizationMiddleware, putInTheCartMiddleware, putInTheCart);
appRoutes.get("/", getProducts); 

export default appRoutes;