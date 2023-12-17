import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionBody = {
  text: null | string;
  image: null | string;
};
@Schema({ timestamps: true })
export class Question {
  @Prop({
    required: true,
    type: {
      text: { type: String, default: null },
      image: { type: String, default: null },
    },
  })
  question: QuestionBody;

  @Prop({
    required: true,
  })
  answers: string[];

  @Prop({ required: true })
  correctAnswer: string;
}

export type QuestionDocument = HydratedDocument<Question>;
export const QuestionSchema = SchemaFactory.createForClass(Question);
