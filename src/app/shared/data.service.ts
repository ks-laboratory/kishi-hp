import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
 dataSource: BehaviorSubject<string> = new BehaviorSubject(environment.defaultLang);
 data = this.dataSource.asObservable();

 constructor() {
 }

 setLang(lang) {
     this.dataSource.next(lang);
 }
}
