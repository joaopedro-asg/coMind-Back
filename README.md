![logoCoMindFooter](https://github.com/user-attachments/assets/d5e34a39-5a41-41e7-803e-83cc5dbdfdab)

# coMind

Este repositório contém a parte de back-end da aplicação coMind, utilizando Express, Prisma e o sistema gerenciador de banco de dados PostgreSQL.

### Objetivo

O coMind é uma organização não governamental dedicada a oferecer apoio psicológico a pessoas que não têm acesso a serviços especializados. Conectamos profissionais qualificados a indivíduos que necessitam de ajuda, promovendo o bem-estar mental e emocional de forma acessível e inclusiva.

## Tecnologias
- Express
- Prisma
- PostgreSQL
- Insomnia

## Como rodar o projeto?

- É necessário ter o NodeJS em sua versão mais recente instalada em sua máquina. Você pode ver as instruções de instalação por [aqui](https://nodejs.org/pt/download/current)


1. Clone este repositório na sua máquina utilizando o comando git `git clone https://github.com/joaopedro-asg/coMind-Back`
2. Abra a pasta coMind-Back utilizando `cd coMind-Back` ou abra a pasta diretamente utilizando uma IDE de sua preferência, como Visual Studio Code.
3. Instale as dependências do projeto via terminal usando `npm install express @prisma/client` em seguida `npm install prisma --save-dev`
4. Instale o CORS (Cross-Origin Resource Sharing) com o comando `npm install cors`
5. Configure o banco de dados alterando o arquivo .env e definindo a URL do Banco de Dados em DATABASE_URL="".
6. Crie as tabelas no Banco com o comando `npx prisma migrate dev --name init`
7. Gere o cliente prisma para interagir com o Banco através do comando `npx prisma generate`
8. Inicie o servidor com o comando `npm start`

## Arquitetura e estrutura

```
prisma -> pasta com os arquivos prisma
    migrations -> pasta com as migrations do prisma, alterações no esquema do banco de dados
src -> diretório com a estrutura de pastas do projeto
    auth -> módulo de autenticação, usando JWT
    controllers -> arquivos responsáveis por gerenciar a lógica
    helpers -> arquivos auxiliares
    middlewares -> funções que interceptam as requisições HTTP
    models -> estrutura dos dados e a lógica de acesso ao banco de dados
    routes -> definições de endpoints da API
```

## Equipe

| <img src="https://avatars.githubusercontent.com/u/90623907?v=4" width="100">| <img src="https://avatars.githubusercontent.com/u/182433541?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/188931906?v=4=" width="100"> | <img src="https://avatars.githubusercontent.com/u/59874241?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/154270670?v=4" width="100"> |
|----| -----| -----| -----| -----|
| Ingryd Duarte | João Pedro Alves | Luanna Galliza | Marx Victor | Stephany Oliveira |

<details>
<summary><strong>Atribuições</strong></summary>

- Ingryd: Implementação de autenticação/autorização, Implementação de rotas, Criação de banco de dados Postgres, CRUD Usuario
- João Pedro: Configuração de Ambiente | NodeJS, CRUD Paciente, CRUD Depoimentos
- Luanna Galliza: CRUD Atendimento
- Marx Victor: CRUD EvolucaoClinica
- Stephany Oliveira: CRUD Profissional


</details>
