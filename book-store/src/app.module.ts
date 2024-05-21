import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin9:eDlOB2dCpgDxieQi@cluster0.wmiqwkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Update with your actual MongoDB connection string
    BooksModule,
  ],
})
export class AppModule {}
