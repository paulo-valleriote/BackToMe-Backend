"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
let ImageService = exports.ImageService = class ImageService {
    constructor() {
        this.AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
        this.s3 = new AWS.S3({
            credentials: {
                accessKeyId: process.env.AWS_S3_ACCESS_KEY,
                secretAccessKey: process.env.AWS_S3_KEY_SECRET,
            },
            endpoint: new AWS.Endpoint(process.env.AWS_S3_ENDPOINT),
        });
    }
    async uploadPhoto(file) {
        try {
            return this.s3_upload({
                file: file,
                bucket: this.AWS_S3_BUCKET,
                originalName: file.originalname,
                mimetype: file.mimetype,
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async s3_upload({ file, bucket, originalName, mimetype, }) {
        const s3Reponse = await this.s3
            .upload({
            Bucket: bucket,
            Key: originalName,
            Body: file.buffer,
            ContentType: mimetype,
        })
            .promise();
        return s3Reponse.Location;
    }
};
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ImageService);
//# sourceMappingURL=images.service.js.map