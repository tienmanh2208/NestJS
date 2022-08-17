import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Singer {
  @Prop()
  name: string;

  @Prop()
  exp: number;

  @Prop()
  createdAt: Date;
}

export type SingerDocument = Singer & Document;
export const SingerSchema = SchemaFactory.createForClass(Singer);
