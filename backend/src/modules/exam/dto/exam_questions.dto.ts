import { Type } from 'class-transformer';

import { IsArray, ValidateNested } from 'class-validator';
import { CreateQuestionDto } from 'src/modules/question/dto/create-question.dto';
// import { UpdateQuestionDto } from 'src/modules/question/dto/update-question.dto';
export class ExamQuestionsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}
