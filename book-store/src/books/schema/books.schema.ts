import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BooksDocument = Books & Document;

@Schema({ collection: 'Books' })
export class Books {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  genre: string;
}

export const BooksSchema = SchemaFactory.createForClass(Books);
