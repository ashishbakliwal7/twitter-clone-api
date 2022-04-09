import { ICreateUser } from "../service/user/IUserInterface";

const Joi = require("@hapi/joi");

const registerValidation = (data: ICreateUser): any => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    phone: Joi.string().min(10).required(),
    email: Joi.string().min(10).required().email(),
    password: Joi.string().min(6).required(),
    userName: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const validation = {
  registerValidation,
};

export default validation;
