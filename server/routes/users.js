import express from "express";
import { verify } from "jsonwebtoken";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getSearch,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/:id", verifyToken, getUser);
router.get("/search/:searchTerm", verifyToken, getSearch);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
