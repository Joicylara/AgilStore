import { v4 as uuidv4 } from 'uuid';




export class AgilStore{
    constructor(nomeProduto, categoria, quantidadeEstoque, preco){
        this.idProduto = uuidv4();
        this.nomeProduto = nomeProduto;
        this.categoria = categoria;
        this.quantidadeEstoque = quantidadeEstoque;
        this.preco = preco;
    }
}