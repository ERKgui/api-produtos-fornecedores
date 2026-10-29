import { Router } from "express";
import { obterFornecedorPorId } from "../controller/fornecedorController.js";

const router = Router();

router.get("/fornecedores/:idFornecedor", obterFornecedorPorId, (req, res) => {
  return res.status(200).json(req.body.fornecedor);
});

export default router;
