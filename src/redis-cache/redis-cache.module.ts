import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheService } from './redis-cache.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: redisStore,
        //host: configService.get('REDIS_HOST'),
        //port: configService.get('REDIS_PORT'),
        //ttl: configService.get('CACHE_TTL'),
        host: 'localhost',
        port: 6379,
        ttl: 5,
      })
    })
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService]
})
export class RedisCacheModule { }
