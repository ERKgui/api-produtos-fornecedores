import { Router } from "express";
import { criarProduto, obterProdutoPorId, vincularFornecedor } from "../controller/produtoController.js";

const router = Router();

router.post("/", criarProduto);

router.get("/:idProduto", obterProdutoPorId);

router.patch("/:idProduto/fornecedor/:idFornecedor", vincularFornecedor);

export default router;
