import express from "express";
import cors from "cors";
import usersRoute from "./routes/users.mjs";

const port = process.env.PORT || 4000;

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/users", usersRoute);

server.get("/", (req, res) => {
  res.send({ api: "API up and running" });
});

server.listen(port, () => console.log(`Server running on port: ${port}`));
