import { ILoginUser } from "../service/login/ILoginInterface";
import { ICreateTweet } from "../service/tweet/ITweetInterface";
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

const loginValidation = (data: ILoginUser): any => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const tweetValidation = (data: ICreateTweet): any => {
  const schema = Joi.object({
    tweet: Joi.string().min(6).max(160).required(),
  });

  return schema.validate(data);
};

const validation = {
  registerValidation,
  loginValidation,
  tweetValidation,
};

export default validation;
