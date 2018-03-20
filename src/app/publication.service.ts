import { Injectable } from '@angular/core';
import { PUBLICATIONS, PUBLICATIONYEARRANGE } from './publication';

@Injectable()
export class PublicationService {

  publications: {year: number, author: string, title: string, name: string}[];

  yearRange: number[];

  constructor() {
    this.publications = PUBLICATIONS;
    this.yearRange = PUBLICATIONYEARRANGE;
  }

  getPublications(): {year: number, author: string, title: string, name: string}[] {
    return this.publications;
  }

  getPublicationYearRange(): number[] {
    return this.yearRange;
  }

  getPublicationsByYear(year: number): {year: number, author: string, title: string, name: string}[] {
    const matchPublications = this.publications.filter(function(item, index) {
      if (item.year === year) {
        return true;
      }
    });
    return matchPublications;
  }

}
