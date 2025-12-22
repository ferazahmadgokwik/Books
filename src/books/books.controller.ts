import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { BookService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findOne(id);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBook: CreateBookDto,
  ) {
    return this.bookService.updateOne(id, updateBook);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.deleteOne(id);
  }
}
