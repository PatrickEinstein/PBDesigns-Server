import mongoose, { Document, Schema, Model } from "mongoose";

interface IGallery extends Document {
  picture: string;
}

const ForumSchema: Schema<IGallery> = new mongoose.Schema(
  {
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const GalleryModel: Model<IGallery> = mongoose.model<IGallery>(
  "GalleryModel",
  ForumSchema
);

export default GalleryModel;
