import { registerAs } from "@nestjs/config";
import Joi from "joi";
import { ValidateEnv } from "./validate-env.config.js";
import { env } from "process";

export default registerAs ('auth', () => {
    // jwtSecret: process.env.JWT_SECRET || 'chave_secreta_padrao',
    // jwtExpireIn: process.env.JWT_EXPIRES_IN || '1d',

    const schema = Joi.object ({
        JWT_SECRET: Joi.string().min(32).required(),
        JWT_EXPIRES_IN: Joi.string().default('id'),
    });

    const env = ValidateEnv(process.env, schema);

    return {
        jwtSecret: env.JWT_SECRET,
        jwtExpiresIn: env.JWT_EXPIRES_IN,
    }
});