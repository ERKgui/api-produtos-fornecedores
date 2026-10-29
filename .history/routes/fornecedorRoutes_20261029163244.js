import { Router } from "express";
import { obterFornecedorPorId, criarFornecedor } from "../controller/fornecedorController.js";

const router = Router();

router.post("/", criarFornecedor);
router.get("/", listarTodosOsFornecedores);
router.get("/:idFornecedor", obterFornecedorPorId, (req, res) => {
  return res.status(200).json(req.body.fornecedor);
});

export default router;
