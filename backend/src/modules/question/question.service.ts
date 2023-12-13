import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './entities/question.entity';
import { Model } from 'mongoose';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private readonly questionRepo: Model<Question>,
  ) {}
  create(createQuestionDto: CreateQuestionDto) {
    return this.questionRepo.create(createQuestionDto);
  }

  findAll() {
    return this.questionRepo.find();
  }

  findOne(id: number) {
    return this.questionRepo.findById(id);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.questionRepo.findByIdAndUpdate(id, updateQuestionDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.questionRepo.findByIdAndRemove(id);
  }
}
