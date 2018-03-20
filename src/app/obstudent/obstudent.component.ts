import { KeyvaluesPipe } from './../keyvalues.pipe';
import { ConsoleLogPipe } from './../console-log.pipe';
import { ObService } from './../ob.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-obstudent',
  templateUrl: './obstudent.component.html',
  styleUrls: ['./obstudent.component.scss']
})
export class ObstudentComponent implements OnInit {
  obs: any;
  obs_years: Array<string>;
  checkModel: any = { show: false };

  constructor(private obService: ObService) { }

  ngOnInit() {
    this.obs = this.obService.getObs();
    this.obs_years = Object.keys(this.obs);
  }

}
