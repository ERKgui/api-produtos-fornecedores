import { Fornecedor } from "../model/Fornecedor.js";
import { buscarPorId as buscarFornecedorPorId } from "../repository/fornecedorRepository.js";

export async function obterFornecedorPorId(req, res, next) {
  try {
    const idFornecedor = Number(req.params.idFornecedor);
    
    if (!idFornecedor || isNaN(idFornecedor) || idFornecedor <= 0) {
      return res.status(400).json({ mensagem: "ID de fornecedor inválido." });
    }
    
    const fornecedor = await buscarFornecedorPorId(idFornecedor);
    if (!fornecedor) {
      return res.status(404).json({ mensagem: "Fornecedor não encontrado" });
    }

    req.body.fornecedor = fornecedor;
    return next();
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
}

export async function criarFornecedor(req, res) {
  try {
    const { nome, cnpj } = req.body;

    return res.status(201).json({ 
      mensagem: "Fornecedor cadastrado com sucesso!", 
      dadosRecebidos: { nome, cnpj } 
    });
  } catch (erro) {
    return res.status(500).json({ message: erro.message });
  }
}
