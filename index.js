import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import appRoutes from './routes/appRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
router.use(authRoutes);
router.use(appRoutes);





app.use(router);

app.listen(process.env.PORT);