import conexao from "../database/conexao.js";

export async function buscarPorId(id){
    const sql = "SELECT * FROM produto WHERE id_produto = ?";
    const [produtos] = await conexao.execute(sql, [id]);

    return produtos[0];
}

export async function vincularFornecedor(idProduto, idFornecedor) {
    const sql = "UPDATE produto SET fk_id_fornecedor = ? WHERE id_produto = ?";

    const [resultado] = await conexao.execute(sql, [
        idFornecedor,
        idProduto
    ]);

    return resultado.affectedRows;
}

export async function removerFornecedor(idProduto) {
    const sql = "UPDATE produto SET fk_id_fornecedor = NULL WHERE id_produto = ?";

    const [resultado] = await conexao.execute(sql, [idProduto]);

    return resultado.affectedRows;
}
