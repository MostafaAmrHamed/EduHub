import { Module } from '@nestjs/common';
import { FileUploadService } from './file_upload.service';
import { FileUploadController } from './file_upload.controller';
import { HttpModule } from '@nestjs/axios';
import { CloudinaryProvider } from './cloudinary/cloudinary.provider';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService, CloudinaryProvider],
  imports: [HttpModule],
})
export class FileUploadModule {}
