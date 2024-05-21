import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from './schema/books.schema';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll() {
    return await this.booksService.getAll();
  }

  @Post()
  async createBooks(@Body() books: Books) {
    const newBook = await this.booksService.create(books);
    return newBook;
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.booksService.getByid(id);
  }

  @Put('/:id')
  async updateBook(@Param('id') id: string, @Body() books: Books) {
    return await this.booksService.update(id, books);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') id: string) {
    await this.booksService.delete(id);
  }
}
