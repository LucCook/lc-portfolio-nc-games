const express = require("express");
const {
  getReviews,
  getReviewById,
  patchReview,
  postReview,
} = require("../controllers/reviews.controllers");
const {
  getCommentsByReviewId,
  postCommentByReviewId,
} = require("../controllers/comments.controllers");
const reviewsRouter = express.Router();

reviewsRouter.route("/")
.get(getReviews)
.post(postReview)

reviewsRouter.route("/:review_id").get(getReviewById).patch(patchReview);

reviewsRouter
  .route("/:review_id/comments")
  .get(getCommentsByReviewId)
  .post(postCommentByReviewId);

module.exports = reviewsRouter;
