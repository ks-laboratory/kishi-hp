import { DataService } from './../shared/data.service';
import { NewsService } from './../news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  currentLang: string;
  subscription: Subscription;

  constructor(private newsService: NewsService,
    private route: ActivatedRoute,
    private dataService: DataService) {
      this.subscription = this.dataService.data.subscribe(lang => {
        this.currentLang = lang;
      });

  }

  getAllNews(): any {
    return this.newsService.getNews();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
