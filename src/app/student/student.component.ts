import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any;
  checkModel: any = { show: false };

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
    // console.log(this.students);
  }

}
