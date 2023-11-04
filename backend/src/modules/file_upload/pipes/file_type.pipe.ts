import { Injectable, FileValidator, BadRequestException } from '@nestjs/common';
@Injectable()
export class FileTypeValidator extends FileValidator {
  isValid(file?: any): boolean | Promise<boolean> {
    return file.mimetype.includes('image');
  }
  buildErrorMessage(): string {
    throw new BadRequestException('The file provided is not an image.');
  }
}
