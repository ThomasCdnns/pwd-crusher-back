import { Module } from '@nestjs/common';
import { RedisCacheModule } from 'src/redis-cache/redis-cache.module';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';

@Module({
  imports: [RedisCacheModule],
  providers: [LookupService],
  controllers: [LookupController],
  exports: [LookupService]
})
export class LookupModule { }
