import { PrismaService } from '@infra/database/prisma/prisma.service';
import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class CpfAlreadyInUseMiddleware implements NestMiddleware {
    private prismaService;
    constructor(prismaService: PrismaService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
