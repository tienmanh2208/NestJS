import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private book: Repository<Book>,
  ) {}

  async getAll() {
    return this.book.find();
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const { name, quantity, status } = createBookDto;
    console.log(createBookDto);
    const bookIns = this.book.create({
      name,
      quantity,
      status,
    });

    console.log('start saving');
    await this.book.save(bookIns);
    console.log('saved');
    return bookIns;
  }
}
