import mongo from '../db/db.js';
import { ObjectId } from 'mongodb';

let db = await mongo();


export async function cart(req, res){
    try {
        const carts = await db.collection('cart').find({
            userId : new ObjectId(res.locals.user._id)
          }).toArray();
        if (!carts) 
        {
            res.status(404).send([]);
            return;
        }
        res.send(carts);
        return;
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function updateCart(req, res){
    const { _id, quantity } = req.body;
  
  
    try {
      const cart = await db.collection('cart').findOne({userId: new ObjectId(res.locals.user._id), _id: new ObjectId(_id) });
  
      if (!cart) {
        return res.sendStatus(404);
      }
      
      await db.collection('cart').updateOne({_id: cart._id}, {$set: { quantity }});
  
      return res.sendStatus(200);
  
    } catch (error) {
      console.log(error)
      return res.sendStatus(500);
    }
};

export async function deleteCart(req, res){
    const _id  = req.body._id;
  
    try {
        await db.collection('cart').deleteOne({ _id: new ObjectId(_id) });
    
        return res.sendStatus(200);
      } catch (error) {
        console.error(error);
        return res.sendStatus(500);
      }
};




