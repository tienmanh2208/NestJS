import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Singer } from './singer.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Song {
  @Prop()
  name: string;

  @Prop()
  year: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Singer' })
  author: Singer;

  @Prop(
    raw({
      author: { type: String },
      birthday: { type: Date },
    }),
  )
  metadata: object;

  @Prop({
    type: [
      {
        quantity: { type: Number },
        singer: { type: mongoose.Schema.Types.ObjectId, ref: 'Singer' },
      },
    ],
  })
  relatedSingers: { quantity: number; singer: Singer }[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Singer' }] })
  listSingers: Singer[];

  @Prop()
  createdAt: Date;
}

export type SongDocument = Song & Document;
export const SongSchema = SchemaFactory.createForClass(Song);
