// models/News.mjs
import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const News = mongoose.model("News", newsSchema);

export default News;
