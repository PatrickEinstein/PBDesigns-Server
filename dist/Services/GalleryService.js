import GalleryModel from "../Models/GalleryModel.js";
export class GalleryService {
    // Create a new Gallery
    async CreateGallery({ imageUrl }) {
        if (!imageUrl) {
            return {
                status: false,
                message: "No Image was uploaded",
            };
        }
        try {
            const newGallery = new GalleryModel({
                picture: imageUrl,
            });
            await newGallery.save();
            return {
                status: true,
                message: "Gallery created successfully.",
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    // Fetch all Gallerys with pagination
    async getAllGallerys({ itemSize, param }) {
        try {
            const page = parseInt(param, 10) || 1;
            const pageSize = parseInt(itemSize, 10) || 10;
            const skip = (page - 1) * pageSize;
            const allGallery = await GalleryModel.find({})
                .skip(skip)
                .limit(pageSize)
                .sort({ createdAt: -1 });
            return {
                status: true,
                data: allGallery,
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
                data: [],
            };
        }
    }
    // Delete a forum
    async DeleteGallery(_id) {
        try {
            const deletedGallery = await GalleryModel.findByIdAndDelete(_id);
            if (!deletedGallery) {
                return {
                    status: false,
                    message: "This Image does not exist does not exist.",
                };
            }
            return {
                status: true,
                message: "Forum successfully deleted.",
                data: deletedGallery,
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
}
