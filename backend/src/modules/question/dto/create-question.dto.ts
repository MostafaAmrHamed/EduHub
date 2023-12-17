import {
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
  ArrayMinSize,
  Validate,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import mongoose from 'mongoose';

@ValidatorConstraint({ name: 'nonEmptyString', async: false })
export class NonEmptyStringValidator implements ValidatorConstraintInterface {
  validate(value: string) {
    if (!value) {
      return false;
    }
    return value.trim().length > 0;
  }

  defaultMessage(args: ValidationArguments) {
    return args.constraints[0]
      ? args.constraints[0]
      : 'Value cannot be an empty string';
  }
}

export class QuestionBodyDto {
  @IsOptional()
  @IsString()
  text: null | string;

  @IsOptional()
  @IsString()
  image: null | string;
}

export class CreateQuestionDto {
  @IsOptional()
  _id: mongoose.Types.ObjectId;

  @ValidateNested()
  @Type(() => QuestionBodyDto)
  question: QuestionBodyDto;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(2, { message: 'At least 2 answers are required' })
  @Validate(NonEmptyStringValidator, {
    message: 'Answers cannot contain empty strings',
    each: true,
  })
  answers: string[];

  @IsString()
  correctAnswer: string;
}
