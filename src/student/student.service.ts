import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(studentData: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(studentData);
    return this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find(); 
  }
}