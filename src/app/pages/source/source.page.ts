import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Article } from 'src/app/core/entities/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
  providers: [NewsService]
})
export class SourcePage implements OnInit {
  news$: Observable<Article[]>;
  id: string;
  constructor(private newsServices: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.news$ = this.newsServices.getData(`everything?sources=${this.id}`).pipe(pluck('articles')) as Observable<Article[]>;
  }

}
