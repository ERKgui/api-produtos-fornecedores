import conexao from "../database/conexao.js";

export async function criarProduto(req, res) {
  try {
    const { descricao, preco, peso } = req.body;

    const sql = "INSERT INTO produto (descricao, preco, peso) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [descricao, preco, peso]);

    return res.status(201).json({ 
      mensagem: "Produto cadastrado com sucesso!", 
      idGerado: resultado.insertId
    });
  } catch (erro) {
    return res.status(500).json({ mensagem: erro.message });
  }
}

export async function obterProdutoPorId(req, res) {
  try {
    const idProduto = Number(req.params.idProduto);
    
    if (!idProduto || isNaN(idProduto) || idProduto <= 0) {
      return res.status(400).json({ mensagem: "ID de produto inválido." });
    }
    
    const sql = "SELECT * FROM produto WHERE id_produto = ?";
    const [linhas] = await conexao.execute(sql, [idProduto]);
    
    if (linhas.length === 0) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    return res.status(200).json(linhas[0]);
  } catch (erro) {
    return res.status(500).json({ mensagem: erro.message });
  }
}

export async function vincularFornecedor(req, res) {
  try {
    const idProduto = Number(req.params.idProduto);
    const idFornecedor = Number(req.params.idFornecedor);

    if (!idProduto || !idFornecedor || isNaN(idProduto) || isNaN(idFornecedor)) {
      return res.status(400).json({ mensagem: "IDs inválidos informados." });
    }

    const sql = "UPDATE produto SET id_fornecedor = ? WHERE id_produto = ?";
    const [resultado] = await conexao.execute(sql, [idFornecedor, idProduto]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Produto não encontrado para vinculação." });
    }

    return res.status(200).json({ mensagem: "Fornecedor vinculado com sucesso ao produto!" });
  } catch (erro) {
    return res.status(500).json({ mensagem: erro.message });
  }
}
