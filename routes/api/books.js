const router = require("express").Router();
const bookController = require("../../controllers/bookController");
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll)
  .post(bookController.save);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
