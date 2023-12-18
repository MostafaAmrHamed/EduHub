import { ApiProperty } from '@nestjs/swagger';
import { CreateExamDto } from './create-exam.dto';

export class CreateExamResponse {
  @ApiProperty()
  message: string;
  @ApiProperty()
  status: string;
  @ApiProperty({ type: CreateExamDto })
  data: CreateExamDto;
}
