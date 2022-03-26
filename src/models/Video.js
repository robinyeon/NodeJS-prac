import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    ratings: Number,
  },
});

const movieModel = mongoose.model("Video", videoSchema);
// model(name of the model, required schema)

export default movieModel;
