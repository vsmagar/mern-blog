const express = require("express");
const {
  addBlog,
  getAllBlog,
  deleteAllBlog,
  updateBlog,
  deleteSingleBlog,
} = require("../controllers/blogController");
const router = express.Router();
const { protected } = require("../middleware/authMiddleware");
const upload = require("./../middleware/upload");

router.get("/", getAllBlog);
router.post("/add", upload.single("img"), addBlog);
router.put("/update/:blogId", updateBlog);
router.delete("/delete/:blogId", protected, deleteSingleBlog);
router.delete("/destroy", deleteAllBlog);

module.exports = router;
