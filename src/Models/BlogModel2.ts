import mongoose, { Document, Schema, Model } from "mongoose";

interface IBlog2 extends Document {
  contentHtml: string;
  contentDelta: string;
  excerpt: string;
}

const ForumSchema: Schema<IBlog2> = new mongoose.Schema(
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

const BlogModel2: Model<IBlog2> = mongoose.model<IBlog2>(
  "BlogModel2",
  ForumSchema
);

export default BlogModel2;
