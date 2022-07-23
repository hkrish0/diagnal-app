import { Request } from 'express';
import { ScrapeService } from './scrape.service';
export declare class ScrapeController {
    private readonly scrapeService;
    constructor(scrapeService: ScrapeService);
    processUrl(post: Request): any;
}
