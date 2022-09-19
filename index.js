import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';
import authRoutes from './routes/authRoutes.js';
import appRoutes from './routes/appRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import checkRoutes from './routes/checkRoutes.js'; 
import sessionsRouter from './routes/sessionsRouters.js';

import mongo from './db/db.js';

let db = await mongo();

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
router.use(authRoutes);
router.use(appRoutes);
router.use(cartRoutes);
router.use(checkRoutes);
router.use(sessionsRouter);

app.use(router);

setInterval(async () => {
    const limit = 10000;
    const now = Date.now();
    try {
      const p = await db.collection('sessions').find().toArray();
      for(let i = 0; i < p.length; i++)
      {
        if(p[i].lastStatus + limit < now )
        {
          await db.collection('sessions').deleteOne({ _id: new ObjectId(p[i]._id) });  
        }
      }
    } catch (error) {
      console.error(error);
    }
    
  }, 15000);






app.listen(process.env.PORT, () => console.log(`App running in port: 5000`));