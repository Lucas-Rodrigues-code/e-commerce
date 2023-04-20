import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { userRepository } from "../repositories/user-repository";
import { duplicatedEmailError, invalidCredentialsError } from "../errors/users-error";

async function createUser(name: string, email: string, password: string) {
    await uniqueEmail(email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return await userRepository.createUser(name, email, hashedPassword);
};

async function uniqueEmail(email: string) {
    const userWithSameEmail = await userRepository.findByEmail(email);

    if (userWithSameEmail) {
        throw duplicatedEmailError()
    };
};

async function userLogin(email: string, password: string) {
    const user = await getUserOrFail(email);
    await validatePasswordOrFail(password, user.password);
    const userId = user.id
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

async function validatePasswordOrFail(password: string, userPassword: string) {
    const isPasswordValid = await bcrypt.compare(password, userPassword);
    if (!isPasswordValid) throw invalidCredentialsError();
};

async function getUserOrFail(email: string) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw invalidCredentialsError();

    return user;
};


export const userService = {
    createUser,
    userLogin
};
