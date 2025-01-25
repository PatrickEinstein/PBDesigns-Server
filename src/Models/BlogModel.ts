import mongoose, { Document, Schema, Model } from "mongoose";

interface IBlog extends Document {
  title: string;
  pictures: string[];
  description: string;
}

const ForumSchema: Schema<IBlog> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pictures: {
      type: [String],
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel: Model<IBlog> = mongoose.model<IBlog>(
  "BlogModel",
  ForumSchema
);

export default BlogModel;
