//Schemas

const Figure = require("../models/figure");
const Post = require("../models/post");

//Controllers

const createFigure = async (req, res) => {
  try {
    const figure = await new Figure(req.body);
    await figure.save();
    return res.status(201).json({
      figure,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllFigures = async (req, res) => {
  try {
    const figures = await Figure.find();
    return res.status(200).json({ figures });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getFigureByName = async (req, res) => {
  try {
    const { Name } = req.params;
    const figure = await Figure.findById(Name);
    if (figure) {
      return res.status(200).json({ figure });
    }
    return res
      .status(404)
      .send("Figure with the specified name does not exist!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateFigure = async (req, res) => {
  try {
    const figure = await Figure.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(figure);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFigure = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Figure.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Figure deleted");
    }
    throw new Error("Figure not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    await post.save();
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.find({ figure_id: `${id}` });
    if (post) {
      return res.status(200).json({ post });
    }
    return res.status(404).send("Post with the specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Exports

module.exports = {
  createFigure,
  getAllFigures,
  getFigureByName,
  updateFigure,
  deleteFigure,
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  getReviews,
};
