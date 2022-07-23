import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Request } from 'express';

@Injectable()
export class ScrapeService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  public create(req: Request): any {
    const urlMetadata = require('url-metadata');
    var cacheManage = this.cacheManager;
    return urlMetadata(req.url).then(
      async function (metadata: any) {
        const cacheValue = await cacheManage.get(req.url);
        if (cacheValue) {
          return cacheValue;
        }
        await cacheManage.set(req.url, generateResponse(metadata));
        return generateResponse(metadata);
      },
      function (error: any) {
        console.log(error);
      });
  }
}
function generateResponse(data: any): any {
  let title = data['title'];
  let description = data['description'];
  let images = data['image'];
  if (data['og:title']) {
    title = data['og:title'];
  }
  if (data['og:description']) {
    description = data['og:description'];
  }
  if (data['og:image']) {
    images = data['og:image'];
  }
  const metaData = { title, description, images };
  return metaData;;
}

