import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(query: Record<string, string>) {
    const filters: Record<string, any> = {};
    if (query.name) {
      filters.name = { $regex: new RegExp(query.name, 'i') };
    }
    return this.classRepo.find(filters);
  }

  async findOne(id: string) {
    const result = await this.classRepo.findById(id);
    if (!result) {
      return new NotFoundException();
    }
    return result;
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    return this.classRepo.findByIdAndUpdate(id, updateClassDto, { new: true });
  }

  async remove(id: string) {
    return this.classRepo.findByIdAndDelete(id);
  }
}
