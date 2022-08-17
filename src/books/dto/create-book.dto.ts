import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';

enum BookStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

export class CreateBookDto {
  @IsNotEmpty()
  name: string;

  @IsInt()
  quantity: number;

  @IsEnum(BookStatus)
  status: BookStatus;
}
