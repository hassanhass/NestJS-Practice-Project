import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreatStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Controller('students')
export class StudentsController {
    constructor(
        private readonly studentsService: StudentsService,) { }

    @Get()
    findAll(){
        return this.studentsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.studentsService.findOne(id)
    }

    @Get(':id/subjects')
    findOneWithSubject(@Param('id') id:number){
        return this.studentsService.findOneWithSubject(id)
    }

    @Post()
    create(@Body() createStudent:CreatStudentDto){
        return this.studentsService.create(createStudent)
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateStudent:UpdateStudentDto){
        return this.studentsService.update(id,updateStudent)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        this.studentsService.delete(id)
    }
}
