import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Exam, ExamSchema } from './entities/exam.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ExamController],
  providers: [ExamService],
  imports: [
    MongooseModule.forFeature([{ name: Exam.name, schema: ExamSchema }]),
    AuthModule,
  ],
})
export class ExamModule {}
