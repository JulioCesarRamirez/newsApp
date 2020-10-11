import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SourceResponse } from 'src/app/core/entities/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
  providers: [NewsService]
})
export class SourcesPage implements OnInit, OnDestroy {
  sources: SourceResponse[];
  fakeArticles = new Array(10);
  term: string = '';
  subscriptions: Subscription[] = [];

  constructor(private newsServices: NewsService) { }

  ngOnInit() {
    this.subscriptions.push(this.newsServices.getSourcesData().subscribe((s: SourceResponse[]) => this.sources = s));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
