import express from "express";
import db from "../data/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await db.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("The users information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The users information could not be retrieved." });
  }
});

router.post("/", async (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
  try {
    const newUser = await db.insert({ name, bio });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("The users information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The users information could not be retrieved." });
  }
});

export default router;
