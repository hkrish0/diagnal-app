import { CacheModule, Module } from '@nestjs/common';
import { ScrapeService } from './scrape.service';
import { ScrapeController } from './scrape.controller';

@Module({
  imports: [CacheModule.register()],
  providers: [ScrapeService],
  controllers: [ScrapeController],
  exports: [ScrapeService],
})
export class ScrapeModule { }
