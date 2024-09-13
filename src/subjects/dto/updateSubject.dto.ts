import { PartialType } from "@nestjs/mapped-types";
import { CreatSubjectDto } from "./createSubject.dto";

export class UpdateSubjectDto extends PartialType(CreatSubjectDto){}