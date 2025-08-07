import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const directoryPathLinux = `${path.join(__dirname, "..", "Routes")}/\*.js`;
const decodedpath = decodeURIComponent(directoryPathLinux);
// const directoryPath = `${path.join(__dirname, "..", "Routes").slice(1)}/*.js`;
// const decodedpath = decodeURIComponent(directoryPath);
console.log(`SWAGGER_LINUX:PATH--->`, directoryPathLinux);
const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "PB-DESIGNS",
            version: "1.7.1",
            description: "Web Pips",
            contact: {
                name: "Patrick",
                url: "https://www.folio11.vercel.app",
                email: "mohammedola1234@gmail.com",
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/`,
                description: "Development server",
            },
        ],
        basePath: "/",
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        explorer: true,
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [decodedpath],
};
const swaggerconfig = swaggerJSDoc(options);
export default swaggerconfig;
