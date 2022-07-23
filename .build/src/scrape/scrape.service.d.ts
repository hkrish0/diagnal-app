import { Cache } from 'cache-manager';
import { Request } from 'express';
export declare class ScrapeService {
    private cacheManager;
    constructor(cacheManager: Cache);
    create(req: Request): any;
}
