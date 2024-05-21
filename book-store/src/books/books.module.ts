import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Books, BooksSchema } from './schema/books.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Books.name, schema: BooksSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
