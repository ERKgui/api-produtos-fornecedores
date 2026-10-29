import { Router } from "express";
import { obterFornecedorPorId, criarFornecedor } from "../controller/fornecedorController.js";

const router = Router();

router.post("/", criarFornecedor);

router.get("/:idFornecedor", obterFornecedorPorId);

export default router;
