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
import isLeap from '../service/is-leap';

const validator = createValidator();
const queryParams = Joi.object().keys({
  year: Joi.number().required().min(0).max(9999)
});
interface LeapYearCheckRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        year: number
    }
}

const handler = (req: ValidatedRequest<LeapYearCheckRequestSchema>, res: Response) => {
    const { year } = req.query;
    const phrase = isLeap(year) ? 'was' : 'was not';
    res.status(200).send(`The year ${year} ${phrase} a Leap year`);
};

export default [validator.query(queryParams), handler]
