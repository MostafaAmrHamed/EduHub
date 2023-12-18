import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '../user/schema/user.schema';
import { AuthGuard } from '../auth/guards/role.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExamQuestionsDto } from './dto/exam_questions.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { CreateExamResponse } from './dto/create-exam-response.dto';

@ApiTags('Exam')
@ApiBearerAuth('access_token')
@UseGuards(JwtGuard, AuthGuard)
@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @ApiBody({ type: CreateExamDto })
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateExamResponse })
  @ApiOperation({
    summary: 'Creates an exam. ADMIN ONLY.',
  })
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examService.create(createExamDto);
  }

  @ApiResponse({ status: HttpStatus.OK, type: CreateExamDto, isArray: true })
  @ApiOperation({
    summary: 'Retrieves all exams.',
  })
  @Get()
  findAll() {
    return this.examService.findAll();
  }

  @ApiResponse({ status: HttpStatus.OK, type: CreateExamDto })
  @ApiOperation({
    summary: 'Retrieves single exam.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examService.findOne(+id);
  }

  @ApiBody({ type: ExamQuestionsDto })
  @ApiResponse({ status: HttpStatus.OK, type: CreateExamDto })
  @ApiOperation({
    summary: 'Updates exam questions. ADMIN ONLY',
  })
  @Roles(Role.ADMIN)
  @Patch(':id/questions')
  updateQuestions(
    @Param('id') id: string,
    @Body() updateExamDto: ExamQuestionsDto,
  ) {
    return this.examService.updateQuestions(id, updateExamDto);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  updateExam(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examService.updateExam(id, updateExamDto);
  }
  @ApiResponse({ status: HttpStatus.OK, type: CreateExamDto })
  @ApiOperation({
    summary: 'Deletes an exam. ADMIN ONLY',
  })
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examService.remove(+id);
  }
}
