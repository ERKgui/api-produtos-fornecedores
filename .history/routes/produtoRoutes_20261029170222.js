import { Router } from "express";
import { criarProduto } from "../controller/produtoController.js";

const router = Router();

router.post("/", criarProduto);

export default router;
