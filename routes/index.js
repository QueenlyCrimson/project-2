const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => controllers.getAllPosts);

router.get("/figures", controllers.getAllFigures);

router.post("/form", controllers.createPost);
