import { IsNotEmpty, IsString, IsArray, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  @Type(() => String)
  @ArrayMinSize(2)
  answers: string[];

  @IsString()
  @IsNotEmpty()
  correctAnswer: string;
}
