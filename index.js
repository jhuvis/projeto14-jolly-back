import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
router.use(authRoutes);
router.use(cartRoutes);




app.use(router);

app.listen(process.env.PORT, () => console.log(`App running in port: 5000`));