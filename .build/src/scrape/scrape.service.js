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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeService = void 0;
const common_1 = require("@nestjs/common");
let ScrapeService = class ScrapeService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
    }
    create(req) {
        const urlMetadata = require('url-metadata');
        var cacheManage = this.cacheManager;
        return urlMetadata(req.url).then(async function (metadata) {
            const cacheValue = await cacheManage.get(req.url);
            if (cacheValue) {
                return cacheValue;
            }
            await cacheManage.set(req.url, generateResponse(metadata));
            return generateResponse(metadata);
        }, function (error) {
            console.log(error);
        });
    }
};
ScrapeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object])
], ScrapeService);
exports.ScrapeService = ScrapeService;
function generateResponse(data) {
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
    return metaData;
    ;
}
//# sourceMappingURL=scrape.service.js.map