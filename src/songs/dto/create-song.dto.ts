import { IsNotEmpty } from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  metadata: object;

  @IsNotEmpty()
  relatedSingers: { quantity: number; singer: string }[];

  @IsNotEmpty()
  listSingers: string[];
}
