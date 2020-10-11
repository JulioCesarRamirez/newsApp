import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Article } from 'src/app/core/entities/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
  providers: [NewsService]
})
export class HeadlinesPage implements OnInit {
  news$: Observable<Article[]>;
  categories: string[] = ['World', 'Mexico', 'Business', 'Technology', 'Entretainment', 'Sports', 'Science'];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getCategoryData(this.categories[0].toLowerCase())
  }

  onGetCategoryData(category: string) {
    this.getCategoryData(category);
  }

  getCategoryData(category: string) {
    this.news$ = this.newsService.getData(`everything?q=${category.toLowerCase()}`).pipe(pluck('articles')) as Observable<Article[]>;
  }

} 