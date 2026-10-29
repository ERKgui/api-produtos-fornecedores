import { Router } from "express";
import { criarProduto, obterProdutoPorId } from "../controller/produtoController.js";

const router = Router();

router.post("/", criarProduto);

router.get("/:idProduto", obterProdutoPorId);

export default router;
