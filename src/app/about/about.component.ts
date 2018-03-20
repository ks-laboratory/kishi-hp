import { DataService } from './../shared/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  currentLang: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) {
      this.subscription = this.dataService.data.subscribe(lang => {
        this.currentLang = lang;
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
