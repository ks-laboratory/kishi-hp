import { DataService } from './../shared/data.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit, OnDestroy {
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
