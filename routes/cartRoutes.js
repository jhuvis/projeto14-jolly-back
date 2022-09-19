import express from 'express';
import { cart, updateCart, deleteCart } from '../controllers/cartControllers.js';
import auth from '../middlewares/authorizationMiddleware.js';


const authRoutes = express.Router();
authRoutes.get("/cart", auth, cart); 
authRoutes.put("/update-cart", auth, updateCart); 
authRoutes.put("/delete-cart", auth, deleteCart);

export default authRoutes;