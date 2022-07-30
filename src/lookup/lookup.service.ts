import { Injectable } from '@nestjs/common';
import { hashKey } from 'src/dto/lookup.dto';
import { Lookup } from 'src/models/lookup.model';
import { RedisCacheService } from 'src/redis-cache/redis-cache.service';

@Injectable()
export class LookupService {
  response!: Lookup;
  constructor(
    private cacheManager: RedisCacheService
  ) { }
  async lookup(data: hashKey) {
    try {
      const cachedValue: Lookup = await this.cacheManager.get(data.hash);

      if (cachedValue) {
        this.response = cachedValue;
        return this.response;
      } else {
        return 'No value to return 🫤';
      }
    }
    catch (error) {
      console.error(error);
      return "Problem fetching data from the cache"
    }
  }
}
