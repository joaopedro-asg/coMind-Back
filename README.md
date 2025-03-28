![logoCoMindFooter](https://github.com/user-attachments/assets/d5e34a39-5a41-41e7-803e-83cc5dbdfdab)

# coMind

Este repositório contém a parte de back-end da aplicação coMind, utilizando Express, Prisma e o sistema gerenciador de banco de dados PostgreSQL.

### Objetivo

O coMind é uma organização não governamental dedicada a oferecer apoio psicológico a pessoas que não têm acesso a serviços especializados. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda, promovendo o bem-estar mental e emocional de forma acessível e inclusiva.

## Tecnologias

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,nodejs,express,prisma,postgresql" />
  </a>
</p>

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor, permitindo o desenvolvimento de aplicações escaláveis.
- **Express**: Framework para Node.js que facilita a criação de APIs RESTful, tornando o gerenciamento de rotas e requisições mais simples e eficiente.
- **Prisma**: ORM que possibilita uma interação com o banco de dados de forma mais intuitiva e segura.
- **PostgreSQL**: Banco de dados relacional
- **JWT (JSON Web Token):** Utilizado para autenticação segura de usuários, permitindo a troca de informações de forma compacta e segura entre as partes.
- **bcrypt:** Biblioteca para criptografia de senhas, garantindo que as credenciais dos usuários sejam armazenadas de maneira segura no banco de dados.

## Como rodar o projeto?

- É necessário ter o NodeJS em sua versão mais recente instalada em sua máquina. Você pode ver as instruções de instalação por [aqui](https://nodejs.org/pt/download/current)


1. Clone este repositório na sua máquina utilizando o comando git `git clone https://github.com/joaopedro-asg/coMind-Back`
2. Abra a pasta coMind-Back utilizando `cd coMind-Back` ou abra a pasta diretamente utilizando uma IDE de sua preferência, como Visual Studio Code.
3. Instale as dependências do projeto com o comando `npm install`
4. Configure o banco de dados alterando o arquivo .env e definindo a URL do Banco de Dados em DATABASE_URL="".
5. Crie as tabelas no Banco com o comando `npx prisma migrate dev --name init`
6. Gere o cliente prisma para interagir com o Banco através do comando `npx prisma generate`
7. Inicie o servidor com o comando `npm start`

## Arquitetura e estrutura

```
prisma -> pasta com os arquivos prisma
    migrations -> pasta com as migrations do prisma, alterações no esquema do banco de dados
    schema.prisma -> modelo do banco de dados, contendo relaciomentos e entidades.
src -> diretório com a estrutura de pastas do projeto
    auth -> serviços de autenticação, usando JWT e bcrypt.
    controllers -> arquivos responsáveis por gerenciar a lógica
    helpers -> arquivos auxiliares
    middlewares -> funções que conectam o sistema operacional a aplicações, dados e usuários, usando HTTP
    models -> estrutura dos dados e a lógica de acesso ao banco de dados
    routes -> definições de endpoints da API
```

## Equipe

| <img src="https://avatars.githubusercontent.com/u/90623907?v=4" width="100">| <img src="https://avatars.githubusercontent.com/u/182433541?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/188931906?v=4=" width="100"> | <img src="https://avatars.githubusercontent.com/u/59874241?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/154270670?v=4" width="100"> |
|----| -----| -----| -----| -----|
| Ingryd Duarte | João Pedro Alves | Luanna Galliza | Marx Victor | Stephany Oliveira |

<details>
<summary><strong>Atribuições</strong></summary>

- Ingryd: Implementação de autenticação/autorização, implementação de rotas, criação de banco de dados Postgres, CRUD Usuario
- João Pedro: Configuração de Ambiente | NodeJS, CRUD Paciente, CRUD Depoimentos, CRUD Grupos de Apoio
- Luanna Galliza: CRUD Atendimento
- Marx Victor: CRUD EvolucaoClinica
- Stephany Oliveira: CRUD Profissional


</details>
