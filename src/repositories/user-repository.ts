import prisma from "../database/database";

async function createUser(name: string, email: string, hashedPassword: string) {
    return await prisma.users.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    });
};

async function findByEmail(email: string) {
    return await prisma.users.findFirst({
        where: {
            email
        }
    });
};

async function getAllUsers() {
    return await prisma.users.findMany({ select: { id: true, email: true, name: true } });
};

async function getUserById(id: number) {
    return await prisma.users.findUnique({
        where: { id },
        select: { id: true, email: true, name: true }
    });
};

async function updateUser(id: number, name: string, email: string, password: string) {
    return await prisma.users.update({
        where: { id },
        data: {
            name,
            email,
            password
        }
    });
};

async function deleteUser(id: number) {
    return await prisma.users.delete({
        where: { id }
    });
};

export const userRepository = {
    createUser,
    findByEmail,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};