import { Component, OnInit } from '@angular/core';
import { pluck } from "rxjs/operators";
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/core/entities/news.interface';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
  providers: [NewsService]
})
export class TopNewsPage implements OnInit {

  articles$: Observable<Article[]>;
  columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private newService: NewsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.articles$ = this.newService.getData('top-headlines?country=us').pipe(pluck('articles')) as Observable<Article[]>;
  }

  doRefresh(event) {
    this.getData();
    setTimeout(() => {
      event.target.complete()
    }, 2000);
  }

}