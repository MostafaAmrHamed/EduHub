import {
  Controller,
  HttpStatus,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileUploadService } from './file_upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FileTypeValidator } from './pipes/file_type.pipe';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/guards/role.guard';
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '../user/schema/user.schema';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CreateFileResponse } from './dto/create_file.response';
@ApiTags('Upload')
@ApiBearerAuth('access_token')
@Roles(Role.ADMIN)
@UseGuards(JwtGuard, AuthGuard)
@Controller('upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}
  @Post()
  @ApiOperation({
    summary: 'Uploads an image. ADMIN ONLY',
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateFileResponse,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({ validators: [new FileTypeValidator({})] }),
    )
    file: Express.Multer.File,
  ) {
    return this.fileUploadService.uploadImage(file);
  }
}
