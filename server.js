import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Array de posts de exemplo (será substituído pelos dados do banco de dados)
const posts = [
    { id: 1, descricao: "Uma foto de um gato", imagem: "https://placecats.com/millie/300/150" },
    // ... outros posts
];

// Cria uma instância do Express, que é o framework web utilizado
const app = express();
app.use(express.static("uploads"))
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});




