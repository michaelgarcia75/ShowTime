import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Concert } from './concert.schema';
import { User } from './user.schema';

export type BandDocument = Band & Document;

@Schema()
export class Band {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concert' }] })
  concerts: Concert[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  fans: User[];

  @Prop({ default: Date.now() })
  createdDate: Date
}

export const BandSchema = SchemaFactory.createForClass(Band);