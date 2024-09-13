import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatSubjectDto } from './dto/createSubject.dto';
import { UpdateSubjectDto } from './dto/updateSubject.dto';
import { Subjects } from 'src/entities/subject.entity';

@Injectable()
export class SubjectsService {
    constructor(
        @InjectRepository(Subjects)
        private subjectsRepository: Repository<Subjects>,) {}
    
    findAll(){
        return this.subjectsRepository.find();
    }

    findOne(@Param('id') id){
        return this.subjectsRepository.findOneBy(id);
    }

    create(createSubject:CreatSubjectDto){
        return this.subjectsRepository.save(createSubject)
    }

    async update(id:number, updateSubjectDto:UpdateSubjectDto){

        await this.subjectsRepository.update(id,updateSubjectDto);

    }

    delete(id:number){
        this.subjectsRepository.delete(id);
    }
}
