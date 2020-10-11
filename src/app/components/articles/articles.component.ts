import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/entities/news.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Observable<Article>

  fakeArticles = new Array(10);

  constructor() { }

  ngOnInit() { }

}
