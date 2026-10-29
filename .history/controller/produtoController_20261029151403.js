import { Produto } from "../model/Produto.js";
import { 
  buscarPorId as buscarProdutoPorId, 
  vincularFornecedor, 
  removerFornecedor 
} from "../repository/produtoRepository.js";

export async function vincularFornecedorAoProduto(req, res) {
  try {
    const idProduto = Number(req.params.idProduto);
    const { fornecedor } = req.body;

    Produto.validarId(idProduto, "produto");

    const produto = await buscarProdutoPorId(idProduto);
    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    await vincularFornecedor(idProduto, fornecedor.id);

    return res.status(200).json({ 
      mensagem: "Fornecedor vinculado ao produto com sucesso", 
      id_produto: idProduto, 
      fk_id_fornecedor: fornecedor.id 
    });
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
}

export async function removerFornecedorDoProduto(req, res) {
  try {
    const idProduto = Number(req.params.idProduto);

    Produto.validarId(idProduto, "produto");

    const produto = await buscarProdutoPorId(idProduto);
    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    await removerFornecedor(idProduto);

    return res.status(200).json({ mensagem: "Fornecedor removido do produto com sucesso" });
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
}
