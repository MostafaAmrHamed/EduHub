import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Class } from 'src/modules/classes/schema/class.entity';
import { Question } from 'src/modules/question/entities/question.entity';

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}
export type ExamQuestions = InstanceType<typeof Question> & {
  _id: mongoose.Types.ObjectId;
};

@Schema({ timestamps: true })
export class Exam {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, min: 10 })
  duration: number;

  @Prop({ required: true, enum: Difficulty })
  difficulty: Difficulty;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Class.name,
  })
  class: mongoose.Schema.Types.ObjectId;

  @Prop({ default: [] })
  questions: ExamQuestions[];
}

export type ExamDocument = HydratedDocument<Exam>;

export const ExamSchema = SchemaFactory.createForClass(Exam);
