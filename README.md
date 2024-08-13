# E-commerce

Este projeto é uma loja virtual que permite aos usuários navegar por diferentes categorias de produtos, adicionar itens ao carrinho e realizar compras. A aplicação foi desenvolvida utilizando uma série de tecnologias modernas para garantir uma experiência de usuário fluida e eficiente.

## Como levantar a aplicação

Siga os passos abaixo para configurar e executar a aplicação localmente:

1. **Clone o repositório**: Baixe o projeto para a sua máquina local.

    ```bash
    git clone <URL_DO_REPOSITÓRIO>
    cd <NOME_DO_REPOSITÓRIO>
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente**:

   Copie o arquivo de exemplo de variáveis de ambiente e preencha com suas configurações:

    ```bash
    cp .env.example .env
    ```

   Edite o arquivo `.env` e preencha as variáveis conforme necessário.

4. **Prepare o banco de dados**:

   Execute os comandos do Prisma para gerar e migrar o banco de dados:

    ```bash
    npx prisma migrate dev
    ```

5. **Inicie o servidor de desenvolvimento**:

    ```bash
    npm run dev
    ```

6. **Acesse a aplicação**:

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **Tailwind CSS**: Framework de CSS para estilização.
- **Prisma**: ORM para acesso ao banco de dados.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Clerk**: Solução para autenticação e gerenciamento de usuários.
- **React**: Biblioteca para construção da interface de usuário.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.

