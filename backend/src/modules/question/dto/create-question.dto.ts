import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsBoolean,
  ValidateNested,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  @MinLength(2)
  @ValidateNested({ each: true })
  @Type(() => IAnswer)
  answers: IAnswer[];
}

class IAnswer {
  @IsString()
  @IsNotEmpty()
  choice: string;
  @IsBoolean()
  @IsNotEmpty()
  isCorrect: string;
}
