import { IsNumber, IsPositive, IsString } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreatSubjectDto{
    
    @IsNumber()
    @IsPositive()
    id: number;

    @IsString()
    subjectName: string;

    @IsNumber()
    @IsPositive()
    credit_hours: number;
}