import { Controller, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }

}
