import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  private students = [];

  createStudent(createStudentDto: CreateStudentDto) {
    const newStudent = {
      id: this.students.length + 1, // Auto-increment ID
      ...createStudentDto,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  findAll() {
    return this.students;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const studentIndex = this.students.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    this.students[studentIndex] = { ...this.students[studentIndex], ...updateStudentDto };
    return this.students[studentIndex];
  }

  deleteStudent(id: number) {
    const studentIndex = this.students.findIndex((student) => student.id === id);

    if (studentIndex === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }

    const deletedStudent = this.students.splice(studentIndex, 1);
    return { message: `Student with ID ${id} deleted`, student: deletedStudent[0] };
  }
}
