import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { userRepository } from "../repositories/user-repository";
import { duplicatedEmailError, invalidCredentialsError, userError } from "../errors/users-error";

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
    const role = user.permission
    const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
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

async function getAllUsers() {
    return await userRepository.getAllUsers();
};

async function getUserById(id: number) {
    const user = await userRepository.getUserById(id);
    if (!user) throw userError();
    return user;
};

async function updateUser(id: number, name: string, email: string, password: string) {
    const user = await userRepository.getUserById(id);
    if (!user) throw userError();
    return await userRepository.updateUser(id, name, email, password);
};

async function deleteUser(id: number) {
    const user = await userRepository.getUserById(id);
    if (!user) throw userError();
    return await userRepository.deleteUser(id);
};

export const userService = {
    createUser,
    userLogin,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
