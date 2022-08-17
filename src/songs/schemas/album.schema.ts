import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'albums' })
export class Album {
  @Prop()
  name: string;

  @Prop()
  exp: number;

  @Prop()
  createdAt: Date;
}

export type AlbumDocument = Album & Document;
export const AlbumSchema = SchemaFactory.createForClass(Album);
