import joi from 'joi';

export default async function checkoutMiddleware(req, res, next) {
    const userSchema = joi.object({
        rua: joi.string().required(),
        cidade: joi.string().required(),
        estado: joi.string().required(),
        cep: joi.string().required(),
        pais: joi.string().required(),
    });
    const validation = userSchema.validate(req.body, { abortEarly: true });
    if (validation.error) {
        return res.status(422).send('Digite os seus dados corretamente!');
    }
    next();
}