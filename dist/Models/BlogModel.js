import mongoose from "mongoose";
const ForumSchema = new mongoose.Schema({
    contentHtml: {
        type: String,
    },
    contentDelta: {
        type: String,
    },
    excerpt: {
        type: String,
    },
}, {
    timestamps: true,
});
const BlogModel = mongoose.model("BlogModel", ForumSchema);
export default BlogModel;
