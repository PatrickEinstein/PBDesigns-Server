import multer from "multer";
import path from "path";
const timing = new Date();
const formattedDate = timing.getUTCDate();
const formattedMonth = timing.getUTCMonth() + 1;
const formattedYear = timing.getUTCFullYear();
const formattedMinute = timing.getMinutes();
const formattedHour = timing.getHours();
const formattedSec = timing.getSeconds();
const formattedTime = `${formattedDate}-${formattedMonth}-${formattedYear}-${formattedHour}-${formattedMinute}-${formattedSec}`;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const directoryPath = `${path.join(__dirname, "..", "uploads").slice(1)}`;
const decodedpath = decodeURIComponent(directoryPath);
console.log(`decoded path: ${decodedpath}`);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, decodedpath);
    },
    filename: function (req, file, cb) {
        cb(null, `${formattedTime}-${file.originalname}`);
    },
});
// const upload: Multer = multer({ storage: storage });
const upload = multer({ storage: multer.memoryStorage() });
export default upload;
