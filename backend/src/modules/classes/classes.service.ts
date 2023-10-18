import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from './schema/class.entity';
import { Model } from 'mongoose';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Class.name) private readonly classRepo: Model<Class>,
  ) {}
  create(createClassDto: CreateClassDto) {
    return this.classRepo.create(createClassDto);
  }

  findAll() {
    return this.classRepo.find();
  }

  findOne(id: string) {
    return this.classRepo.findById(id);
  }

  update(id: string, updateClassDto: UpdateClassDto) {
    return this.classRepo.findByIdAndUpdate(id, updateClassDto, { new: true });
  }

  remove(id: string) {
    return this.classRepo.findByIdAndDelete(id);
  }
}
