import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../shared/data.service';
import { PublicationService } from './../publication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit, OnDestroy {
  currentLang: string;
  subscription: Subscription;

  publicationYearRange: number[];

  constructor(private publicationService: PublicationService,
    private route: ActivatedRoute,
    private dataService: DataService) {
      this.subscription = this.dataService.data.subscribe(lang => {
        this.currentLang = lang;
      });

    }

  ngOnInit() {
    this.publicationYearRange = this.publicationService.getPublicationYearRange();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setPublicationsByYear(year: number): any {
    // サービスで検索した結果をセット
    const setPublications = this.publicationService.getPublicationsByYear(year);
    return setPublications;
  }

}
