import express from 'express';
import cors from 'cors';
import router from './routes/index.js'; 
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.port);