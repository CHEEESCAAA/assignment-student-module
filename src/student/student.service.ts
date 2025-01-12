import { Injectable } from '@nestjs/common';
import { Controller, Delete, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){}
  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
