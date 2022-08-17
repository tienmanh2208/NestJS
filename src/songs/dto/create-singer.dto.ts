import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSingerDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  exp: number;
}
