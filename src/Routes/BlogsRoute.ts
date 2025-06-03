import express from "express";
import { BlogsController } from "../controller/BlogsController.js";

let BlogsRouter = express.Router();
const blogsController = new BlogsController();

/**
 * @openapi
 * paths:
 *   /api/blogV2:
 *     post:
 *       tags:
 *         - Blogs
 *       summary: Create a new Blog
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *       responses:
 *         200:
 *           description: {}
 *         404:
 *           description: Not Found
 */

BlogsRouter.post("/api/blogV2", blogsController.CreateBlog2);

/**
 * @openapi
 * '/api/blog/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - Blogs
 *     summary: This Endpoint to get all Forums
 *     parameters:
 *       - in: path
 *         name: page
 *         required: true
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *       - in: path
 *         name: pageSize
 *         required: true
 *         description: Number of items per page for pagination
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       400:
 *         description: Bad request
 */

BlogsRouter.get("/api/blog/:page/:pageSize", blogsController.getAllBlogs);

/**
 * @openapi
 * /api/blog/update/{id}:
 *   patch:
 *     tags:
 *       - Blogs
 *     summary: Update an Forum by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title for the blog
 *               description:
 *                 type: string
 *                 description: The new description for the blog
 *               picture:
 *                 type: string
 *                 description: The new picture for the blog
 *               note:
 *                 type: string
 *                 description: The new note for the blog
 *             example:
 *               title: Updated Title
 *               description: Updated Description
 *               picture: /path/to/updated/picture.jpg
 *               note: Updated Note
 *     responses:
 *       '200':
 *         description: Forum updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Forum not found
 *       '500':
 *         description: Internal server error
 */

BlogsRouter.patch("/api/blog/update", blogsController.UpdateBlog);

/**
 * @openapi
 * /api/blog/delete/{id}:
 *   delete:
 *     tags:
 *       - Blogs
 *     summary: Delete an blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the blog to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: blog deleted successfully
 *       '404':
 *         description: blog not found
 *       '500':
 *         description: Internal server error
 */

BlogsRouter.delete("/api/blog/delete/:_id", blogsController.DeleteBlog);

export default BlogsRouter;
