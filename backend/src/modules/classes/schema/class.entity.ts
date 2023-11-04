import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema({ timestamps: true })
export class Class {
  @Prop({ required: true })
  name: string;
}
export type ClassDocument = HydratedDocument<Class>;

export const ClassSchema = SchemaFactory.createForClass(Class);
