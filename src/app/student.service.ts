import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { STUDENTS } from './student';

@Injectable()
export class StudentService {

  constructor() { }

  getStudents(): any {
    return STUDENTS;
  }

}
