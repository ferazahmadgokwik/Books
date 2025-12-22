import { CreateBookDto } from './dto/create-book.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BookService {
  private books = [
    { id: 1, title: 'Book one', author: 'Author One' },
    { id: 2, title: 'Book two', author: 'Author two' },
  ];

  create(createBookDto: CreateBookDto) {
    const id = this.books.length + 1;
    const book = { id, ...createBookDto };
    this.books.push(book);
    return {
      code: 1,
      data: book,
      message: 'succes',
    };
  }
  findAll() {
    return {
      code: 1,
      data: this.books,
      message: 'success',
    };
  }

  findOne(id: number) {
    const book = this.books.find((b) => b.id == id);
    if (!id || !book) {
      throw new NotFoundException('Not Found');
    }
    return {
      code: 1,
      message: 'success',
      data: book,
    };
  }

  updateOne(id: number, updateBookDto: CreateBookDto) {
    const book = this.books.find((b) => b.id == id);
    if (!id || !book) {
      throw new NotFoundException('Not Found');
    }
    book.author = updateBookDto.author;
    book.title = updateBookDto.title;

    return {
      code: 1,
      data: book,
      message: 'success',
    };
  }
  deleteOne(id: number) {
    const book = this.books.find((b) => b.id == id);
    if (!id || !book) {
      throw new NotFoundException('Not Found');
    }
    this.books = this.books.filter((b) => b.id != id);
    return {
      code: 1,
      data: null,
      message: 'deleted successfully',
    };
  }
}
