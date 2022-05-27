import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'
import { Band } from './band.schema';
import { Concert } from './concert.schema';


export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    is_admin: boolean;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Band' }] })
    bands: Band[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concert' }] })
    bookings: Concert[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concert' }] })
    wishlist: Concert[];

    @Prop({ default: Date.now() })
    createdDate: Date
}

export const UserSchema = SchemaFactory.createForClass(User);