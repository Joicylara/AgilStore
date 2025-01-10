<h1> 🛍 API AgilStore - Gerenciamento de Produtos</h1>
Este repositório é sobre API AgilStore, uma aplicação desenvolvida para facilitar o gerenciamento de inventário de uma loja de eletrônicos. Com essa API, operações como adicionar, listar, atualizar, excluir e buscar produtos podem ser realizadas de forma simples e eficiente.

## 📝 Contextualização
A AgilStore é uma loja de eletrônicos que expandiu seu catálogo de produtos, enfrentando dificuldades com o gerenciamento manual do inventário em planilhas. Para resolver esses desafios, foi criada esta aplicação para automatizar e organizar o controle de produtos.

Esta API foi desenvolvida para solucionar um dos desafios propostos pelo Processo Seletivo da Aceleradora Ágil, turma 27 (2025/1º Semestre), com o objetivo de demonstrar habilidades em desenvolvimento back-end, utilizando uma das tecnologias e ferramentos: Python, Node.js ou Java, a escolha para essa aplicação foi Node.js com JavaScript.

## 🛠 Tecnologias Utilizadas e Ferramentas
- [Node.js](https://nodejs.org/pt/download) -  Plataforma de desenvolvimento back-end;
- [Express.js](https://www.npmjs.com/package/express) - Framework que auxilia com recursos na criação de serviços web;
- [UUID](https://www.npmjs.com/package/uuid) - Para geração de IDs únicos dos produtos;
- [JSON](https://www.w3schools.com/js/js_json_intro.asp) - Para a persistência de dados entre sessões;
- [Insomnia](https://insomnia.rest/download) - Ferramenta para testar APIs;
- [Git Bash](https://git-scm.com/downloads) - Ferramenta para o controle de versionamento;
- [Visual Studio Code](https://code.visualstudio.com/download) - Editor de código-fonte gratuito, para o desenvolvimento da aplicação.

- ### 📜 Algumas informações importantes para melhor entendimento

- O que é API?
  
    API é Interface de Programação de Aplicações. Utilizando a analogia do garçom, API leva pedidos de um aplicativo a um serviço e traz as respostas de volta. Ela facilita a comunicação entre diferentes sistemas, permitindo que eles troquem informações sem precisar saber exatamente como funcionam por dentro.

- O que é API's REST?
  
    APIs REST (Representational State Transfer) são um tipo específico de API que segue um conjunto de princípios e regras para a troca de informações entre sistemas.

- Métodos HTTP
    - GET: Recuperar dados de um servidor.
    - POST:  Enviar dados para o servidor para criar um novo recurso.
    - PATCH: Atualizar parcialmente(modificação de apenas dado) um recurso existente
    - PUT: Atualizar completamente(modifica mais de um dado) um recurso existente no servidor.
    - DELETE: Remover um recurso do servidor.

- Status de resposta HTTP
    - 1xx - Informativo
    - 2xx - Sucesso
    - 3xx - Redirecionamento
    - 4xx - Erro do Cliente
    - 5xx - Erro do Servidor
      
Irei explicar sobre o 2xx, que foi utilizado na aplicação.

- Status 2xx
    - 200 OK: A solicitação foi bem-sucedida e o servidor retornou os dados solicitados. Bastante utilizado.
    - 201 Created: A solicitação foi bem-sucedida e um novo recurso foi criado. Usado principalmente no post.
    - 204 No Content: A solicitação foi bem-sucedida, mas não há conteúdo para retornar. Usado mais no delete.

## 👣 Passo a Passo para Execução
 Para rodar a API você terá que ter em editor de código-fonte, git e ter instalado o Node.js.
 
 **Clonando o Repositório:**
Para clonar o projeto, execute o seguinte comando:
```
git clone https://github.com/SeuUsuario/NomeDoRepositorio.git
cd NomeDoRepositorio
```
**Instalando Dependências:**
```
npm i
```
**Executando o Projeto:**
```
npm run dev
```
  
