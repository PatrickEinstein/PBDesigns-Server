import mongoose from "mongoose";
const ForumSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});
const BlogModel = mongoose.model("BlogModel", ForumSchema);
export default BlogModel;
