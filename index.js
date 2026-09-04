const express = require("express");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World" });
// });

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500.0 },
  { id: 2, nome: "Mouse", preco: 20.0 },
];

app.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
