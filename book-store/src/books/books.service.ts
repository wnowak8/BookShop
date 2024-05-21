import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Books, BooksDocument } from './schema/books.schema';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Books.name) private booksModel: Model<BooksDocument>,
  ) {}

  async getAll(): Promise<Books[]> {
    return await this.booksModel.find().exec();
  }

  async create(books: Books) {
    const newBooks = new this.booksModel(books);
    return await newBooks.save();
  }

  async getByid(id: string) {
    return await this.booksModel.findById(id).exec();
  }

  async update(id: string, books: Books) {
    return await this.booksModel.findByIdAndUpdate(id, books, { new: true });
  }
  async delete(id: string) {
    await this.booksModel.findByIdAndDelete(id);
  }
}
