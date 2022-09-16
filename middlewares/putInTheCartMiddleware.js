import joi from 'joi';

export default async function putInTheCartMiddleware(req, res, next) {
    const userSchema = joi.object({
        name: joi.string().required(),
        price: joi.number().required(),
        image: joi.string().required(),
        quantity: joi.number().required(),
    });
    const validation = userSchema.validate(req.body, { abortEarly: true });
    if (validation.error) {
        return res.status(422).send('Digite os seus dados corretamente!');
    }
    next();
}