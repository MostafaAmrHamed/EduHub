import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Class } from 'src/modules/classes/schema/class.entity';

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}
@Schema({ timestamps: true })
export class Exam {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  duration: string;
  @Prop({ required: true, enum: Difficulty })
  difficulty: Difficulty;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Class.name,
  })
  class: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true })
  questions: string;
}

export type ExamDocument = HydratedDocument<Exam>;

export const ExamSchema = SchemaFactory.createForClass(Exam);
