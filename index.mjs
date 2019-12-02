import express from "express";

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send({ api: "API up and running" });
});

server.listen(port, () => console.log(`Server running on port: ${port}`));
