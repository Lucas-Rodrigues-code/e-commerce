import prisma from "../src/database/database";

async function main() {

    await prisma.clients.deleteMany({})
    await prisma.address.deleteMany({})
    await prisma.users.deleteMany({})
/* 
    const user = await prisma.users.create({
        data: {
            name: "lucas",
            email: "lucas@gmail.com",
            password: "123456"
        }
    })

    await prisma.users.create({
        data: {
            name: "mateus",
            email: "mateus@gmail.com",
            password: "123456"
        }
    })


    const address = await prisma.address.create({
        data: {
            cep: "81935072",
            city: "curitiba",
            number: "12",
            state: "pr",
            street: "rua naoki",
        }

    })

    console.log(address)

    const client = await prisma.clients.create({
        data: {
            user: user.id,
            cpf: "11122233369",
            phone: "41999995588",
            birthday: `2002-04-25T16:30:00Z`,
            name: "lucas",
            excluded: false,
            address: address.id
        }
    })
    console.log(client)
*/
}
main()
    .then(() => {
        console.log("Registro feito com sucesso")
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
