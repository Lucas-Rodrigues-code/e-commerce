import prisma from "../src/database/database";

async function main() {

    const users = await prisma.users.findMany({})
    if (!users) {
        await prisma.users.createMany({
            data: [
                {
                    name: "lucas",
                    email: "lucas@gmail.com",
                    password: "123456"
                },
                {
                    name: "mateus",
                    email: "mateus@gmail.com",
                    password: "123456"
                },
            ]
        })
    }

    const address = await prisma.address.findFirst({})
    if (!address) {
       const a = await prisma.address.create({
            data: {
                cep: "81935072",
                city: "curitiba",
                number: "12",
                state: "pr",
                street: "rua naoki",
            }
        })
    }
    const address1 = await prisma.address.findFirst({})
    if(!address1) return console.log("deu ruim ")
   const a = await prisma.clients.createMany({
        data: [
            {
                user: 1,
                cpf: "11122233369",
                phone: "41999995588",
                birthday: `2002-04-25T16:30:00Z`,
                name: "lucas",
                excluded: false,
                address: address1.id
            }
        ]
    })
    
};

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