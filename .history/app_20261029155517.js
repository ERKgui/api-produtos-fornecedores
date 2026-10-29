import express from "express";
import produtoRoutes from "./routes/produtoRoutes.js";
import 

const app = express();

app.use(express.json());

app.use("/produto", produtoRoutes);
app.use("/fornecedor", fornecedorRoutes)

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta http://localhost:3001");   
})