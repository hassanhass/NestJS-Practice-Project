import { PartialType } from "@nestjs/mapped-types";
import { CreatStudentDto } from "./createStudent.dto";

export class UpdateStudentDto extends PartialType(CreatStudentDto){}