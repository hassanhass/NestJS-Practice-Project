import { IsNumber, IsPositive, IsString } from "class-validator"

export class CreatStudentDto{

    @IsNumber()
    id:number

    @IsString()
    firstName:string

    @IsString()
    lastName:string

    @IsNumber()
    @IsPositive()
    age:number

    @IsString()
    stage:string
}