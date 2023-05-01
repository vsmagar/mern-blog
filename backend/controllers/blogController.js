const blog = require("../models/blogModle");
const jwt = require("jsonwebtoken");
// const { json } = require("express")

exports.addBlog = async (req, res) => {
  try {
    const { id } = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    console.log(req.body);
    const result = await blog.create({ ...req.body, userId: id });
    res.json({
      message: "blog ADDEDD SUSSEFULLY",
      result,
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

exports.getAllBlog = async (req, res) => {
  try {
    const result = await blog.find();
    res.json({
      message: "get all blog",
      result,
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};
exports.deleteAllBlog = async (req, res) => {
  try {
    const result = await blog.deleteMany();
    res.json({
      message: "blog deleted",
      result,
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const result = await blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });
    res.json({
      message: "blog update",
      // result
    });
  } catch (error) {
    res.json({
      message: "error" + error,
    });
  }
};

exports.deleteSingleBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const result = await blog.findByIdAndDelete(blogId);
    res.json({
      message: "blog Deleted",
      result,
    });
  } catch (error) {
    res.status(400).json({
      message: "error" + error,
    });
  }
};
