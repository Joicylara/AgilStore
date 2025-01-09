import { Router } from "express";
import { addProduto, atualizarProduto, buscaProdutoCategoria, buscarProdutoId, buscarProdutoNome, buscaTodasCategorias, deletarProduto, listarProdutos } from "../controllers/agilStore.controller.js";


const rota =  Router();

rota.post("/novoProduto", (req, res) =>{
    const { nomeProduto, categoria, quantidadeEstoque, preco } = req.body;
    const novoProduto = addProduto(nomeProduto, categoria, quantidadeEstoque, preco);
    res.status(201).json({ novoProduto });
});

rota.get("/listaProdutos", (req, res) =>{
    const { categoria, ordenarPor } = req.query;
    const listaProdutos = listarProdutos(categoria, ordenarPor);
    res.status(200).json({ listaProdutos });
});

rota.get("/buscaProduto/:id", (req, res) =>{
    const { id } = req.params;
    const produtoId = buscarProdutoId(id);
    res.status(200).json({ produtoId});
});

rota.get("/buscaNome/:nome", (req,res) =>{
    const { nome } = req.params;
    const produtoNome = buscarProdutoNome(nome);
    res.status(200).json({ produtoNome });
});

rota.get("/buscaTodasCategorias", (req, res) =>{
    const categoria = buscaTodasCategorias();
    res.status(200).json({ categoria });
});

rota.get("/buscaCategoria/:categoria", (req, res) =>{
    const { categoria } = req.params;
    const produtoCategoria = buscaProdutoCategoria(categoria);
    res.status(200).json({ produtoCategoria });
});

rota.put("/atualizarProduto/:id", (req, res) =>{
    const { id } = req.params;
    const { nomeProduto, categoria, quantidadeEstoque, preco } = req.body;
    const produtoAtualizado = atualizarProduto(id, nomeProduto, categoria, quantidadeEstoque, preco);
    res.status(200).json({ produtoAtualizado });
});

rota.delete("/deletaProduto/:id", (req, res) =>{
    const { id } = req.params;
    const produtoDeletado = deletarProduto(id);
    res.status(200).json({produtoDeletado});
});

export { rota }