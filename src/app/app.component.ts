import { DeviceService } from './shared/device.service';
import { DataService } from './shared/data.service';

import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  isMobile = false;
  nowlocationpath: string;
  location: Location;
  currentLang: string
  subscription: Subscription;

  constructor(
    private router: Router,
    location: Location,
    private translate: TranslateService,
    private dataService: DataService,
    private deviceService: DeviceService,
    private title: Title
  ) {
    this.location = location;

    this.subscription = this.dataService.data.subscribe(data => {
      this.currentLang = data;
    });

    this.subscription = this.deviceService.isDeviceMobile.subscribe(isDeviceMobile => {
      this.isMobile = isDeviceMobile;
    });

    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  ngOnInit() {
    // スクロール位置修正追加
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    // titleとdescription追加
    // this.setDescription(this.description);
    this.setTitle('早稲田大学 岸研究室 ソフトウェア工学 - Waseda univ. Kishi-Lab Software Engineering -');

  }

  clickLanTab(lang) {
    if (lang !== this.currentLang) {
      this.translate.use(lang);
      this.currentLang = lang;
      this.dataService.setLang(lang);
    }
  }

  clickTab(dest: string): void {
    // Ideal...
    // this.router.navigate([dest]);
    switch (dest) {
      case '/home':
        this.router.navigate(["/home"]);
        break;
      case '/about':
        this.router.navigate(["/about"]);
        break;
      case '/activity':
        this.router.navigate(["/activity"]);
        break;
      case '/research':
        this.router.navigate(["/research"]);
        break;
      case '/contact':
        this.router.navigate(["/contact"]);
        break;
      case '/publication':
        this.router.navigate(["/publication"]);
        break;
      default:
        console.log('no routing');
    }
  }

  isActive(dest: string): boolean {
    return (dest == this.location.path());
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

}
