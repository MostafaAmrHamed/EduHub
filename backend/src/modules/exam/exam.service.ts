import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Exam } from './entities/exam.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private readonly examRepo: Model<Exam>) {}

  create(createExamDto: CreateExamDto) {
    return this.examRepo.create(createExamDto);
  }

  findAll() {
    return this.examRepo.find();
  }

  findOne(id: number) {
    return this.examRepo.findById(id);
  }

  update(id: number, updateExamDto: UpdateExamDto) {
    return this.examRepo.findByIdAndUpdate(id, updateExamDto, { new: true });
  }

  remove(id: number) {
    return this.examRepo.findByIdAndRemove(id);
  }
}
