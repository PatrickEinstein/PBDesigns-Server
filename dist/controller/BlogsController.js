import { BlogsService } from "../Services/BlogsService.js";
export class BlogsController {
    blogService = new BlogsService();
    constructor() { }
    CreateBlog = async (req, res, next) => {
        const { title, description, imageUrls } = req.body;
        const response = await this.blogService.CreateBlog({
            title,
            description,
            imageUrls,
        });
        return res.json(response);
    };
    getAllBlogs = async (req, res, next) => {
        const { pageSize: itemSize, page: param } = req.body;
        const response = await this.blogService.getAllBlogs({
            itemSize,
            param,
        });
        return res.json(response);
    };
    UpdateBlog = async (req, res, next) => {
        const { id: _id } = req.params;
        const { title, description, picture: imageUrls } = req.body;
        const response = await this.blogService.UpdateBlog({
            _id,
            description,
            imageUrls,
            title,
        });
        return res.json(response);
    };
    DeleteBlog = async (req, res, next) => {
        const { id: _id } = req.body;
        const response = await this.blogService.DeleteBlog(_id);
        return res.json(response);
    };
}
