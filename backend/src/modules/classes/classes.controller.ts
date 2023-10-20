import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  HttpStatus,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { ClassesService } from './classes.service';

import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { ClassResponse } from './dto/class.response';

import { JwtGuard } from '../auth/guards/jwt.guard';
import { AuthGuard } from '../auth/guards/role.guard';
import { Roles } from '../auth/decorators/role.decorator';

import { Role } from '../user/schema/user.schema';

@ApiTags('Classes')
@Roles(Role.ADMIN)
@UseGuards(JwtGuard, AuthGuard)
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}
  @Post()
  @ApiBody({ type: CreateClassDto })
  @ApiResponse({ status: HttpStatus.CREATED, type: ClassResponse })
  @ApiBearerAuth('access_token')
  @ApiOperation({
    summary: 'Create a class',
  })
  create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    type: ClassResponse,
    isArray: true,
  })
  @ApiBearerAuth('access_token')
  @ApiOperation({
    summary: 'Return all classes or certain classes with filter',
  })
  @ApiQuery({ name: 'name', type: String, required: false })
  findAll(@Query() query: Record<string, string>) {
    return this.classesService.findAll(query);
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: ClassResponse })
  @ApiBearerAuth('access_token')
  @ApiOperation({
    summary: 'Returns class by id',
  })
  findOne(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: ClassResponse })
  @ApiResponse({ status: HttpStatus.OK, type: CreateClassDto })
  @ApiBearerAuth('access_token')
  @ApiOperation({
    summary: 'Update a class',
  })
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(id, updateClassDto);
  }

  @Delete(':id')
  @ApiBody({ type: CreateClassDto })
  @ApiResponse({ status: HttpStatus.OK, type: ClassResponse })
  @ApiBearerAuth('access_token')
  @ApiOperation({
    summary: 'Deletes a class',
  })
  remove(@Param('id') id: string) {
    return this.classesService.remove(id);
  }
}
