import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Answer = {
  choice: string;
  isCorrect: boolean;
};
@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  answers: Answer[];
}

export type QuestionDocument = HydratedDocument<Question>;

export const QuestionSchema = SchemaFactory.createForClass(Question);
