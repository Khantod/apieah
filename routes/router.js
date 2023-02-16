import express from "express";
import multer from "multer";
import {
  getUser,
  createUser,
  logInUser,
  deleteUserById,
} from "../controllers/userController.js";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProducts,
  getProductsByName,
  deleteAllProduct,
  getImage,
} from "../controllers/productController.js";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

const router = express.Router();
router.get("/", getUser);
router.post("/", createUser);
router.post("/login", logInUser);
router.delete("/delete/:id", deleteUserById);
// Products

router.get("/products", getProducts);
router.get("/products/:id", getProductsById);
router.get("/products/search/:name", getProductsByName);
router.post("/products", upload.single("image"), createProduct);
router.patch("/products/:id", upload.single("image"), updateProducts);
router.delete("/products/:id", deleteProduct);
router.delete("/products", deleteAllProduct);
export default router;
