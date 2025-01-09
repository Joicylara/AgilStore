
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';


const arquivoJson = path.resolve('src/data/produtos.json');

const lerArquivo = () =>{
    try{
        const dado = fs.readFileSync(arquivoJson, 'utf-8');
        const produtosJson = JSON.parse(dado);
        return produtosJson;
    }catch(erro){
        return "Ocorreu um erro na leitura do arquivo";
    }
};

const escreverArquivo = (dado) =>{
    try{
        fs.writeFileSync(arquivoJson, JSON.stringify(dado, null, 2), 'utf8');
    }catch(erro){
        console.error("Erro ao escrever no arquivo", erro);
    }
};



export const addProduto = (nomeProduto, categoria, quantidadeEstoque, preco) => {

    if (!nomeProduto || !categoria || quantidadeEstoque === undefined || preco === undefined) {
        return "Todos os campos (nome, categoria, quantidade e preço) são obrigatórios";
    }

    let dados =lerArquivo();
    
    const produtoExistente = dados.produtos.some(produto => produto.nomeProduto === nomeProduto && produto.categoria === categoria);
    
    if (produtoExistente) {
        return "Produto já existe!";
    }
    
    const novoProduto = {
        idProduto: uuidv4(),
        nomeProduto,
        categoria,
        quantidadeEstoque,
        preco
    };

    dados.produtos.push(novoProduto);
    escreverArquivo(dados);
    return novoProduto;
};

export const listarProdutos = (categoria, ordenar) => {
    let dados = lerArquivo();
    let produtos = dados.produtos;
    

    if(categoria){
        let normalizarTexto = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        produtos = produtos.filter(produto => normalizarTexto(produto.categoria).includes(normalizarTexto(categoria)));
    }

    if(ordenar){
        produtos.sort((a,b) =>{
            if(ordenar === 'nome') return a.nomeProduto.localeCompare(b.nomeProduto);
            if(ordenar === 'quantidade') return Number(a.quantidadeEstoque) - Number(b.quantidadeEstoque);
            if(ordenar === 'preco') return a.preco - b.preco;
            return 0;
        });
    }

    return produtos;
};

export const buscarProdutoId = (idProduto) =>{
    let dados = lerArquivo();
    let idExiste = dados.produtos.find(produto => produto.idProduto === idProduto);
    if(idExiste){
        return idExiste;
    }else{
        return "Id não existe";
    }
};

export const buscarProdutoNome = (nomeProduto) =>{
    let dados =  lerArquivo();
    let nomeExiste = dados.produtos.filter(produto => produto.nomeProduto.toLowerCase().includes(nomeProduto.toLowerCase()));
    if(nomeExiste.length > 0){
        return nomeExiste;
    }else{
        return "Não existe produto com esse nome"
    }
};

export const buscaTodasCategorias = () => {
    let dados = lerArquivo(); 
    const categorias = [...new Set(dados.produtos.map(produto => produto.categoria))]; 
    return categorias;
};

export const buscaProdutoCategoria = (categoria) =>{
    let dados = lerArquivo();
    const normalizarTexto = (texto) =>{
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    }
    
    let categoriaNormalizada = normalizarTexto(categoria);

    let categoriaExiste = dados.produtos.filter(produto => normalizarTexto(produto.categoria).includes(categoriaNormalizada));
    if(categoriaExiste.length > 0){
        return categoriaExiste;
    }else{
        return "Não existe essa categoria"
    }
};

export const atualizarProduto = (idProduto, nomeProduto, categoria, quantidadeEstoque, preco) =>{
    
    if (!nomeProduto || !categoria || quantidadeEstoque === undefined || preco === undefined) {
        return "Todos os campos (nome, categoria, quantidade e preço) são obrigatórios";
    }
    
    let dados = lerArquivo();
    const index = dados.produtos.findIndex(produto => produto.idProduto === idProduto);

    if(index !== -1){
        const produtoExiste = dados.produtos.some((produto, i) =>
            produto.nomeProduto === nomeProduto && produto.categoria === categoria && i !== index
        );
        if(produtoExiste){
            return "Esse produto já existe"
        }
        dados.produtos[index] = {
            idProduto,
            nomeProduto,
            categoria,
            quantidadeEstoque,
            preco
        };
        escreverArquivo(dados);
        return dados.produtos[index];
    }else{
        return "Produto não encontrado"
    }
};

export const deletarProduto = (idProduto) =>{
    let dados = lerArquivo();
    const index = dados.produtos.findIndex(produto => produto.idProduto === idProduto);

    if(index !== -1){
       dados.produtos.splice(index, 1);
        escreverArquivo(dados);
        return "Produto excluido com sucesso";
    }else{
        return "Produto não encontrado"
    }
};

