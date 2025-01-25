import express from "express";
import { GalleryController } from "../controller/GalleryController.js";
let GalleryRouter = express.Router();
const galleryController = new GalleryController();
/**
 * @openapi
 * paths:
 *   /api/gallery:
 *     post:
 *       tags:
 *         - Gallery
 *       summary: Create a new gallery
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imageUrl:
 *                   type: string
 *                   description: The new picture for the gallery
 *       responses:
 *         200:
 *           description: {}
 *         404:
 *           description: Not Found
 */
GalleryRouter.post("/api/gallery", galleryController.CreateGallery);
/**
 * @openapi
 * '/api/gallery/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - Gallery
 *     summary: This Endpoint to get all gallery
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
GalleryRouter.get("/api/gallery/:page/:pageSize", galleryController.getAllGallery);
/**
 * @openapi
 * /api/gallery/delete/{id}:
 *   delete:
 *     tags:
 *       - Gallery
 *     summary: Delete an gallery by ID
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
GalleryRouter.delete("/api/gallery/delete/:_id", galleryController.DeleteGallery);
export default GalleryRouter;
