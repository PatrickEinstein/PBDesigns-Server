import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
const uploadBufferToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: "Gallery" }, (error, result) => {
            if (result) {
                resolve(result.secure_url);
            }
            else {
                reject(error);
            }
        });
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};
export default uploadBufferToCloudinary;
