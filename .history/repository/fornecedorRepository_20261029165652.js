import conexao from "../database/conexao.js";

export async function buscarPorId(id) {
    const sql = "SELECT * FROM fornecedor WHERE id_fornecedor = ?";
    const [linhas] = await conexao.execute(sql, [id]);

    return linhas[0];
}
