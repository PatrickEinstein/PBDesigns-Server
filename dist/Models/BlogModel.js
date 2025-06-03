import mongoose from "mongoose";
const ForumSchema2 = new mongoose.Schema({
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
const BlogModel = mongoose.model("BlogModel2", ForumSchema2);
export default BlogModel;
