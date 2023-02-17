const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", controllers.getAllPosts);

router.post("/posts", controllers.createPost);

router.delete("/posts/:id", controllers.deletePost);

router.get("/figures", controllers.getAllFigures);

router.post("/figures", controllers.createFigure);

router.delete("/figures/:id", controllers.deleteFigure);

router.put("/figures/:id", controllers.updateFigure);

module.exports = router;
