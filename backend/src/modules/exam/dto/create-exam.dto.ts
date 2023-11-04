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
import { ApiProperty } from '@nestjs/swagger';
export class CreateExamDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  @Min(10)
  duration: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  class: mongoose.Schema.Types.ObjectId;
}
