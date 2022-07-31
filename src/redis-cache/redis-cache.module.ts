import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheService } from './redis-cache.service';
import type { ClientOpts } from 'redis';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: 'redis',
      port: 6379,
    })
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService]
})
export class RedisCacheModule { }
