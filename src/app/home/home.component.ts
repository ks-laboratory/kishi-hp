import { DeviceService } from './../shared/device.service';
import { DataService } from './../shared/data.service';
import { Subscription } from 'rxjs/Subscription';
import { NewsService } from './../news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  currentLang: string;
  subscription: Subscription;
  deviceSubscription: Subscription;
  isMobile: boolean;

  constructor(private newsService: NewsService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private deviceService: DeviceService) {
      this.subscription = this.dataService.data.subscribe(lang => {
        this.currentLang = lang;
      });
      this.deviceSubscription = this.deviceService.isDeviceMobile.subscribe(isDeviceMobile => {
        this.isMobile = isDeviceMobile;
      });
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.deviceSubscription.unsubscribe();
  }

  getRecentNews(max: number): any {
    return this.newsService.getRecentNews(max);
  }

}
