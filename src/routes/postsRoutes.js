import express from "express"; // Importa o framework Express
import multer from "multer"; // Importa o middleware multer para upload de arquivos
// Importa as funções controladoras do arquivo postsController.js
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSucessStatus: 200
}

const storage = multer.diskStorage({
  // Define o destino para armazenamento dos arquivos enviados
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define a pasta "uploads" como destino
  },
  // Define o nome do arquivo no destino
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Usa o nome original do arquivo
  }
})

const upload = multer({ dest: "./uploads", storage }); // Configura o multer com storage

const routes = (app) => {
  // Habilita o parseamento de requisições com corpo em JSON
  app.use(express.json()); 
  app.use(cors(corsOption));

  // Rota GET para listar todos os posts (veja o método listarPosts em postsController.js)
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post (veja o método postarNovoPost em postsController.js)
  app.post("/posts", postarNovoPost);

  // Rota POST para upload de imagem utilizando o middleware multer
  app.post("/upload", upload.single("imagem"), uploadImagem); // "imagem" é o nome do campo no formulário

  app.put("/upload/:id", atualizarNovoPost);

};

export default routes;