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

export const userRepository = {
    createUser,
    findByEmail
};