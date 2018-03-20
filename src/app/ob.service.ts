import { Injectable } from '@angular/core';
import { OBS } from './ob';

@Injectable()
export class ObService {

  constructor() { }

  getObs(): any {
    return OBS;
  }

}
