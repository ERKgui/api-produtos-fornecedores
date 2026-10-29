import { Router } from "express";
import {
  vincularFornecedorAoProduto,
  removerFornecedorDoProduto
} from "../controller/produtoController.js";

const router = Router();

router.patch(
  "/:idProduto/vincular-fornecedor/:idFornecedor",
  vincularFornecedorAoProduto
);

router.patch(
  "/:idProduto/remover-fornecedor",
  removerFornecedorDoProduto
);

export default router;