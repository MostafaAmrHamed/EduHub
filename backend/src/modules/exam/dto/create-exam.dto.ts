import {
  IsMongoId,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsPositive,
  Min,
} from 'class-validator';
import { Difficulty } from '../entities/exam.entity';
import mongoose from 'mongoose';
export class CreateExamDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsPositive()
  @Min(10)
  duration: number;
  @IsNotEmpty()
  @IsEnum(Difficulty)
  difficulty: Difficulty;
  @IsNotEmpty()
  @IsMongoId()
  class: mongoose.Schema.Types.ObjectId;
  //TODO: change to a questions schema id after creating a questions module
  @IsNotEmpty()
  questions: string;
}
