import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Students } from "./students.entity";
@Entity()
export class Subjects {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectName: string;

    @Column()
    credit_hours: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(() => Students, (students) => students.students_subjects)
    subjectOf: Students[];
}
