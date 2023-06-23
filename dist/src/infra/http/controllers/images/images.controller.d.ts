/// <reference types="multer" />
import { ImageService } from '@infra/http/services/images/images.service';
export declare class ImagesController {
    private imageService;
    constructor(imageService: ImageService);
    upload(file: Express.Multer.File): Promise<any>;
}
