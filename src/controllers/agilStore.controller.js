
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

export const listarProdutos = () => {
    let dados = lerArquivo();
    return dados.produtos;
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

export const atualizarProduto = (idProduto, nomeProduto, categoria, quantidadeEstoque, preco) =>{
    let dados = lerArquivo();
    const index = dados.produtos.findIndex(produto => produto.idProduto === idProduto);

    if(index !== -1){
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

