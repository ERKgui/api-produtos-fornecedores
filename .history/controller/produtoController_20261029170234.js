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
