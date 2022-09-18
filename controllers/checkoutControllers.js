import mongo from '../db/db.js';
import { ObjectId } from 'mongodb';

let db = await mongo();


export async function postCheckout(req, res){
    try {
        const endereco = req.body;
        console.log(res.locals.user);
        const carts = await db.collection('cart').find({
            userId : new ObjectId(res.locals.user._id)
          }).toArray();
        if (carts.length === 0) 
        {
            res.status(404).send("CARRINHO VAZIO");
            return;
        }
        else
        {
            await db.collection('Pedido').insertOne(
                { 
                    rua: endereco.rua,
                    cidade: endereco.cidade,
                    estado: endereco.estado,
                    cep: endereco.cep,
                    pais: endereco.pais,
                    pixStatus: "Aguardando pagamento",
                    carts : carts,
                }
            );

            await db.collection('cart').deleteMany({ userId: new ObjectId(res.locals.user._id) });


            return res.status(201).send('Pedido em analise');
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error.message);

    }
};