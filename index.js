import express from 'express';
import cors from 'cors';
import router from './routes/index.js'; 
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
router.use(authRoutes);





app.use(router);

app.listen(process.env.PORT);