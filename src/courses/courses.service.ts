import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

import { v4 as uuidv4} from 'uuid';

@Injectable()
export class CoursesService {
  private courses: Course[];
  constructor(){
    this.courses = [];
  }

  create(createCourseDto: CreateCourseDto) {
    console.log(`esto es una prueba`)
    const course: Course = {
      id: uuidv4(),
      name: createCourseDto.name,
      createdAt: new Date(),
      ... new Course()
    }
    this.courses.push( course );
    return course;
  }

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find( course => course.id === id );
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: string) {
    return `This action removes a #${id} course`;
  }
}
