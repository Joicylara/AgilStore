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

## 📜 Algumas informações importantes para melhor entendimento

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
git clone https://github.com/Joicylara/AgilStore.git
cd AgilStore
```
**Instalando Dependências:**
```
npm i
```
**Executando o Projeto:** Esse comando utiliza o Nodemon, que facilita na produção, tendo em vista que ele reinicia automaticamente a aplicação
```
npm run dev
```
**Acesse a API no navegador ou ferramenta de testes:**

A API estará rodando localmente com a URL: http://localhost:3000, foi até feito o deploy, porém como foi utilizado um arquivo JSON para a persistência dos dados não houve êxito, pois o arquivo é local.

## ⚙ Funcionalidades

| **Método** | **Rota**                  | **Descrição**                                                                                       | **Parâmetros/Body**                                                                                  |
|------------|---------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| `POST`     | `/novoProduto`            | Adiciona um novo produto ao inventário.                                                           | **Body:** `{ "nomeProduto": string, "categoria": string, "quantidadeEstoque": number, "preco": number }` |
| `GET`      | `/listaProdutos`          | * Lista todos os produtos no inventário, com opção de filtragem e ordenação.                         | **Query:** `categoria=string`, `ordenarPor=string` (opcional)                                       |
| `GET`      | `/buscaProduto/:id`       | Busca um produto específico pelo ID.                                                             | **Params:** `id=string`                                                                             |
| `GET`      | `/buscaNome/:nome`        | Busca produtos pelo nome ou parte do nome.                                                       | **Params:** `nome=string`                                                                           |
| `GET`      | `/buscaTodasCategorias`   | Lista todas as categorias existentes no inventário.                                              | N/A                                                                                                 |
| `GET`      | `/buscaCategoria/:categoria` | Busca todos os produtos de uma categoria específica.                                              | **Params:** `categoria=string`                                                                      |
| `PUT`      | `/atualizarProduto/:id`   | Atualiza informações de um produto existente no inventário.                                       | **Params:** `id=string` <br> **Body:** `{ "nomeProduto": string, "categoria": string, "quantidadeEstoque": number, "preco": number }` |
| `DELETE`   | `/deletaProduto/:id`      | Remove um produto do inventário pelo ID.                                                         | **Params:** `id=string`                                                                             |


obs: * Em `/listaProdutos` pode ser usado de várias formas, como por exemplo:

  Sem filtro ou ordenação (todos os produtos):
  `http://localhost:3000/listaProdutos`
  
  Somente por categoria:
  `http://localhost:3000/listaProdutos?categoria=acessorio`
  
  Somente por ordenação (por nome):
  `http://localhost:3000/listaProdutos?ordenarPor=nome`

### 📚 Organização do projeto
```
  📂AgilStore
   └───src
      ├───controllers         
      │   └───agilStore.controller.js
      ├───data               
      │   └───produtos.json
      ├───models              
      │   └───AgilStore.model.js
      ├───routes              
      │   └───agilStore.routes.js
      └───server.js           
  ├───.gitignore            
  ├───exemplo de dados.txt   
  ├───package-lock.json     
  └───package.json          

```
**Descrição dos arquivos**

- **`agilStore.controller.js`**: Controlador que gerencia as requisições e lógica de negócios do AgilStore.
- **`produtos.json`**: Arquivo que contém os dados dos produtos utilizados na aplicação.
- **`AgilStore.model.js`**: Define o modelo de dados da aplicação, representando as entidades utilizadas.
- **`agilStore.routes.js`**: Define as rotas da aplicação e os endpoints da API.
- **`server.js`**: Arquivo de configuração e inicialização do servidor Express.
- **`.gitignore`**: Arquivo que contém as configurações de quais arquivos ou pastas devem ser ignorados pelo Git.
- **`exemplo de dados.txt`**: Arquivo contendo um exemplo de dados para fins de testes ou inicialização.
- **`package-lock.json`**: Arquivo que registra a versão exata das dependências do projeto.
- **`package.json`**: Arquivo de configuração do Node.js, contendo as dependências e scripts do projeto.

  ## 🧪 Testes
A API foi testada utilizando o Insomnia, uma ferramenta para realizar requisições HTTP. Os resultados demonstram o funcionamento correto das rotas.

### 🖼 Exemplos de testes com prints

<div align="center">
  <h3>Atualiza os dados de acordo com o ID(pput)</h3>
  <img src="https://drive.google.com/uc?export=view&id=1y4-_xULygTbMKHSHSyUCTSvjWkqLl9zS" width="600px">
  <p>No exemplo foi colocado em formato json os dados e modificado o campo desejado, no lado direito mostra a atualização concluida</p>

  <h3>Deleta produto de acordo com o ID (delete)</h3>
  <img src="https://drive.google.com/uc?export=view&id=1g2OgB53vVpY98fhbM1ozLwT-y8MKtXEB" width="600px">
<p>Como mostra no exemplo é necessário apenas passar o id do produto que deseja excluir no parâmetro</p>

  <h3>Lista todos os produtos (get)</h3>
  <img src="https://drive.google.com/uc?export=view&id=1CcaIwI-IDuxvQev3niGM5PUWM5eF986B" width="600px">
  <p>Na demosntração do exemplo ele esta listando por ordem alfabética, sendo o filtro desejado passado no parâmetro, que várias de acordo o tipo do filtro, foi explicado sobre o endpoit na tabela acima.</p>
</div>

### 🎥 Vídeo demonstrativo do teste realizado no front-end
Para complementar o projeto, e fazer alguns testes, foi desenvolvido um front-end que consome as rotas da API e fornece uma interface gráfica para gerenciar os produtos. O repositório com o código-fonte do front-end está nesse link [aqui](https://github.com/Joicylara/AgilStore_fron-end), também tem o deploy do front-end, porém tem que esta com a API rodando localmente para funcionar, link do [deploy](https://agil-store-fron-end.vercel.app/). Tem um vídeo mostrando o funcionamento no front-end aqui no repositório.

## Links importantes
[AgilStore front-end](https://github.com/Joicylara/AgilStore_fron-end)

[deploy](https://agil-store-fron-end.vercel.app/)

## Conclusão
A API AgilStore é uma solução eficiente para o gerenciamento de inventário, permitindo que uma loja administre produtos de maneira prática e escalável. Este projeto ilustra a integração entre uma aplicação back-end e front-end.

Obrigado por explorar este projeto, caso tenha dúvidas ou sugestões, abra uma issue ou entre em contato.
