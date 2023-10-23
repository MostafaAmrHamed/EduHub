import {
  Controller,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileUploadService } from './file_upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FileTypeValidator } from './pipes/file_type.pipe';
@Controller('upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}
  @Post()
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
