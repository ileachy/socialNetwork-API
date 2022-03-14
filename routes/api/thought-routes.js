const router = require("express").Router();

const {
  addThought,
  addReaction,
  removeThought,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/<userID>
router.route("/:userId").post(addThought);

// /api/thoughts/<userId>/<commentId>
router.route("/:userId/thoughtId").put(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route("/:UserId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
