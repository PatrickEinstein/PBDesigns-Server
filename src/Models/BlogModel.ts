import mongoose, { Document, Schema, Model } from "mongoose";

interface IBlog extends Document {
  contentHtml: string;
  contentDelta: string;
  excerpt: string;
}

const ForumSchema: Schema<IBlog> = new mongoose.Schema(
  {
    contentHtml: {
      type: String,
    },
    contentDelta: {
      type: String,
    },
    excerpt: {
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
