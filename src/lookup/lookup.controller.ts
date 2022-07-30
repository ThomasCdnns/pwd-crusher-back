import { Body, Controller, Post } from '@nestjs/common';
import { hashKey } from 'src/dto/lookup.dto';
import { LookupService } from './lookup.service';

@Controller()
export class LookupController {
  constructor(private lookupService: LookupService) { }

  @Post('lookup')
  searchKey(@Body() body: hashKey) {
    return this.lookupService.lookup(body);
  }
}
