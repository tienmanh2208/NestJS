import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
// @UseGuards(AuthGuard())
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAll() {
    return this.bookService.getAll();
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }
}
