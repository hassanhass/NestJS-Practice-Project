import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { UpdateSubjectDto } from './dto/updateSubject.dto';
import { CreatSubjectDto } from './dto/createSubject.dto';

@Controller('subjects')
export class SubjectsController {
    constructor(
        private readonly subjectsService: SubjectsService,) { }

    @Get()
    findAll(){
        return this.subjectsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.subjectsService.findOne(id)
    }

    @Post()
    create(@Body() createSubject:CreatSubjectDto){
        return this.subjectsService.create(createSubject)
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateSubject:UpdateSubjectDto){
        this.subjectsService.update(id,updateSubject)
    }
}
