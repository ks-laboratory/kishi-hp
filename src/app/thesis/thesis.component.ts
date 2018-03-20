import { DataService } from './../shared/data.service';
import { Subscription } from 'rxjs/Subscription';
import { ThesisService } from './../thesis.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})
export class ThesisComponent implements OnInit, OnDestroy {

  currentLang: string;
  subscription: Subscription;

  thesisYearRange: number[];
  thesisDegreeRange: string[];

  // thesisDegreeRange: string[] = [
  //   'master', 'bachelor',
  // ];

  constructor(private thesisService: ThesisService,
    private dataService: DataService) {
      this.subscription = this.dataService.data.subscribe(lang => {
        this.currentLang = lang;
      });

    }

  ngOnInit() {
    this.thesisYearRange = this.thesisService.getYearRange();
    this.thesisDegreeRange = this.thesisService.getDegrees();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setThesesByYearDegree(year: number, degree: string): any {
    // サービスで検索した結果をセット
    const setTheses = this.thesisService.getThesesByYearDegree(year, degree);
    return setTheses;
  }

}
