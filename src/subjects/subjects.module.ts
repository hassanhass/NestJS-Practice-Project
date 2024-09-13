import { Module, ValidationPipe } from '@nestjs/common';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { Subjects } from 'src/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subjects])],
  controllers: [SubjectsController],
  providers: [SubjectsService,{
    provide:APP_PIPE,
    useClass: ValidationPipe,
    }]
})
export class SubjectsModule {}
