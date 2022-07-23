import { Body, Controller, Post } from '@nestjs/common';
import { Request } from 'express';
import { ScrapeService } from './scrape.service';

@Controller('scrape')
export class ScrapeController {

  constructor(private readonly scrapeService: ScrapeService) { }

  @Post()
  public processUrl(@Body() post: Request) {
    return this.scrapeService.create(post);
  }
}
