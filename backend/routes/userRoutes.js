import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserByID,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUsers,
  updateUsers,
} from "../controller/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUsers);

export default router;
