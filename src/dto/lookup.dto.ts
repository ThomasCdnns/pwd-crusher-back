import { IsString } from 'class-validator';

export class hashKey {
  @IsString()
  public hash: string;
}
