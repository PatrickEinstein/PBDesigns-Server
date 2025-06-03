import { RequestHandler } from "express";
import { BlogsService } from "../Services/BlogsService.js";

export class BlogsController {
  blogService = new BlogsService();
  constructor() {}
  CreateBlog2: RequestHandler = async (req, res, next) => {
    console.log(req.body);
    const { contentHtml, contentDelta, excerpt } = req.body;
    const response = await this.blogService.CreateBlog2(
      contentHtml,
      contentDelta,
      excerpt
    );
    return res.json(response);
  };

  getAllBlogs: RequestHandler = async (req, res, next) => {
    const { pageSize: itemSize, page: param } = req.body;
    const response = await this.blogService.getAllBlogs({
      itemSize,
      param,
    });
    return res.json(response);
  };
  UpdateBlog: RequestHandler = async (req, res, next) => {
    
    const { _id, contentHtml, contentDelta, excerpt } = req.body;
    const response = await this.blogService.UpdateBlog(
      _id,
      contentHtml,
      contentDelta,
      excerpt
    );
    return res.json(response);
  };
  DeleteBlog: RequestHandler = async (req, res, next) => {
    const { _id } = req.params;
    const response = await this.blogService.DeleteBlog(_id);
    return res.json(response);
  };
}
