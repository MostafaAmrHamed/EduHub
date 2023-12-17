import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
// import { UpdateQuestionDto } from './dto/update-question.dto';
// import { InjectModel } from '@nestjs/mongoose';
// import { Question } from './entities/question.entity';
// import { Model } from 'mongoose';
import { Question } from './entities/question.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}
  create(createQuestionData: CreateQuestionDto | UpdateQuestionDto) {
    const question = new this.questionModel(createQuestionData);
    return question;
  }
}
