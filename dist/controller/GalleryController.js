import { GalleryService } from "../Services/GalleryService.js";
export class GalleryController {
    blogService = new GalleryService();
    constructor() { }
    CreateGallery = async (req, res, next) => {
        const { imageUrl } = req.body;
        const response = await this.blogService.CreateGallery({
            imageUrl,
        });
        return res.json(response);
    };
    getAllGallery = async (req, res, next) => {
        const { pageSize: itemSize, page: param } = req.params;
        const response = await this.blogService.getAllGallerys({
            itemSize,
            param,
        });
        return res.json(response);
    };
    DeleteGallery = async (req, res, next) => {
        const { _id } = req.params;
        // console.log(_id)
        const response = await this.blogService.DeleteGallery(_id);
        return res.json(response);
    };
}
