import {Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from 'src/entities/students.entity';
import { Repository } from 'typeorm';
import { CreatStudentDto } from './dto/createStudent.dto';
import { UpdateStudentDto } from './dto/updateStudent.dto';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Students)
        private studentsRepository: Repository<Students>,) {}
    
    findAll(){
        return this.studentsRepository.find();
    }

    findOne(id:number){
        return this.studentsRepository.findOneBy({id});
    }

    findOneWithSubject(id:number){
        return this.studentsRepository.findOne({
            where:{id},
            relations:{students_subjects:true}
        })
    }

    create(createStudent:CreatStudentDto){
        return this.studentsRepository.save(createStudent)
    }

    async update(id:number, updateStudentDto:UpdateStudentDto){

        await this.studentsRepository.update(id,updateStudentDto);

    }

    delete(id:number){
        this.studentsRepository.delete(id);
    }
}
