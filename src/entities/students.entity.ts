import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subjects } from "./subject.entity";

@Entity()
export class Students {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    stage: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @ManyToMany(() => Subjects, (subjects) => subjects.subjectOf)
    @JoinTable({ name: 'student_subject' }) 
    students_subjects: Subjects[];
}
