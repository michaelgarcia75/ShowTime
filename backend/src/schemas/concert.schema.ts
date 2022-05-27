import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type ConcertDocument = Concert & Document;

@Schema()
export class Concert {
  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  band_id: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  seats: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  subs: User[];

  @Prop({ default: Date.now() })
  createdDate: Date
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);