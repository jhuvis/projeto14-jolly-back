import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import mongo from '../db/db.js';

let db = await mongo();

export async function getProducts (req, res){
    try {
        await db.collection("products").find().toArray().then(productsArray => {
            return res.status(201).send(productsArray);
        });
    } catch (error) {
       res.status(500).send('Não foi possível conectar ao servidor!');
    }
};

export async function putInTheCart (req, res){
    try {
        const user = res.locals.user;
        if(user) {
            const product = req.body;
            db.collection('cart').insertOne(
                { 
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: product.quantity,
                    userId: user._id
                }
            );
            return res.status(201).send('Item colocado no carrinho!');
        } else {
            return res.status(401).send('Login não autorizado!'); 
        }
    }
    catch (error) {
        return res.status(500).send('Não foi possível conectar ao servidor!');
    }
};