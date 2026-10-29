import { Fornecedor } from "../model/Fornecedor.js";
import { buscarPorId as buscarFornecedorPorId } from "../repository/fornecedorRepository.js";

export async function obterFornecedorPorId(req, res, next) {
  try {
    const idFornecedor = Number(req.params.idFornecedor);
    
    Fornecedor.validarId(idFornecedor);
    
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
