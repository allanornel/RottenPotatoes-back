import joi from "joi";

export const reviewSchema = joi.object({
  rating: joi.number().required().min(0).max(5),
  ratingComment: joi.string(),
});
