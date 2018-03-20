import { Injectable } from '@angular/core';
import { THESES, THESISYEARRANGE, THESISDEGREES } from './thesis';

@Injectable()
export class ThesisService {

  theses: any;
  yearRange: number[];
  degrees: string[];

  constructor() {
    this.theses = THESES;
    this.yearRange = THESISYEARRANGE;
    this.degrees = THESISDEGREES;
  }

  getTheses(): any {
    return this.theses;
  }

  getYearRange(): number[] {
    return this.yearRange;
  }

  getDegrees(): string[] {
    return this.degrees
  }

  getThesesByYearDegree(year: number, degree: string): any {
    if (this.theses[year]) {
      return this.theses[year][degree];
    } else {
      return null;
    }
  }

}
