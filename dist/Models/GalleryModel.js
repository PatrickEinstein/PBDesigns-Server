import mongoose from "mongoose";
const ForumSchema = new mongoose.Schema({
    picture: {
        type: String,
    },
}, {
    timestamps: true,
});
const GalleryModel = mongoose.model("GalleryModel", ForumSchema);
export default GalleryModel;
