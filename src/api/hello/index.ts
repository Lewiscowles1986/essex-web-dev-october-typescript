import { Response } from 'express';
import Joi from 'joi';
import {
    ContainerTypes,
    // Use this as a replacement for express.Request
    ValidatedRequest,
    // Extend from this to define a valid schema type/interface
    ValidatedRequestSchema,
    // Creates a validator that generates middlewares
    createValidator
} from 'express-joi-validation';

const validator = createValidator();
const queryParams = Joi.object().keys({
  name: Joi.string().trim().default('World').disallow('null', 'undefined', '')
});
interface HelloRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        name: string
    }
}

const handler = (req: ValidatedRequest<HelloRequestSchema>, res: Response) => {
    const { name } = req.query;
    res.status(200).send(`Hello ${name}`);
};

export default [validator.query(queryParams), handler]
