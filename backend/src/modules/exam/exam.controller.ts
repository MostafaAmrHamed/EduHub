import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '../user/schema/user.schema';
import { AuthGuard } from '../auth/guards/role.guard';

@UseGuards(JwtGuard, AuthGuard)
@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examService.create(createExamDto);
  }

  @Get()
  findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examService.findOne(+id);
  }
  @Roles(Role.ADMIN)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examService.update(+id, updateExamDto);
  }
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examService.remove(+id);
  }
}
