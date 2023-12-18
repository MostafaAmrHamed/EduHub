import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Exam } from './entities/exam.entity';
import { Model } from 'mongoose';
import { ExamQuestionsDto } from './dto/exam_questions.dto';
import { QuestionService } from '../question/question.service';

@Injectable()
export class ExamService {
  constructor(
    @InjectModel(Exam.name) private readonly examRepo: Model<Exam>,
    private questionService: QuestionService,
  ) {}

  async create(createExamDto: CreateExamDto) {
    try {
      const exam = await this.examRepo.create(createExamDto);
      return { status: 'success', message: 'Exam created', data: exam };
    } catch (error) {
      return {
        status: 'error',
        error,
      };
    }
  }

  findAll() {
    return this.examRepo.find().populate('class');
  }

  findOne(id: number) {
    return this.examRepo.findById(id);
  }

  updateExam(id: string, updateExamDto: UpdateExamDto) {
    return this.examRepo.findByIdAndUpdate(id, updateExamDto, { new: true });
  }

  async updateQuestions(id: string, updateQuestionsDto: ExamQuestionsDto) {
    const exam = await this.examRepo.findById(id);
    if (!exam) {
      throw new NotFoundException('Exam not found');
    }
    const questionDocuments = updateQuestionsDto.questions.map((question) => {
      return question._id ? question : this.questionService.create(question);
    });
    exam.questions = questionDocuments;
    return exam.save();
  }

  remove(id: number) {
    return this.examRepo.findByIdAndRemove(id);
  }
}
