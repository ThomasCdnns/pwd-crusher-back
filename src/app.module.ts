import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LookupModule } from './lookup/lookup.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [
    LookupModule,
    RedisCacheModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
