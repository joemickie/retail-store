import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ErrorMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction, err?: any) {
        console.error(err?.stack || 'Internal Server Error');
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
