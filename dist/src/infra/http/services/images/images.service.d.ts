/// <reference types="multer" />
export declare class ImageService {
    private AWS_S3_BUCKET;
    private s3;
    constructor();
    uploadPhoto(file: Express.Multer.File): Promise<string | any>;
    private s3_upload;
}
