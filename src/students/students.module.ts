import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Students } from 'src/entities/students.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
    imports: [TypeOrmModule.forFeature([Students])],
    controllers: [StudentsController],
    providers: [StudentsService,{
    provide:APP_PIPE,
    useClass: ValidationPipe,
    }]
})
export class StudentsModule {}

