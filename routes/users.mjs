import express from "express";
import db from "../data/db.js";

const router = express.Router();

// Get All Users
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

// Get user by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await db.findById(id);

    if (!user)
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });

    res.status(200).json(user);
  } catch (error) {
    console.log("The users information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The user information could not be retrieved." });
  }
});

// Create new user
router.post("/", async (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio)
    return res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });

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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const removed = await db.remove(id);
    if (!removed)
      return res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });

    res.status(200).json({ message: "User removed" });
  } catch (error) {
    console.log("The user could not be removed", error);
    res.status(500).json({ error: "The user could not be removed" });
  }
});

export default router;
