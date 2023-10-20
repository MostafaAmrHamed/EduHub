import { ApiResponseProperty } from '@nestjs/swagger';
// import { Expose, Transform } from 'class-transformer';

export class ClassResponse {
  @ApiResponseProperty()
  // @Expose()
  _id: string;

  @ApiResponseProperty()
  // @Expose()
  name: string;
}
