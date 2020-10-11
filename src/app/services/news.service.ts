import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { News, SourceResponse } from 'src/app/core/entities/news.interface';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<News> {
    return this.http.get(`${apiUrl}/${url}`, { params }) as Observable<News>;
  }

  getSourcesData(): Observable<SourceResponse[]> {
    return this.http.get(`${apiUrl}/sources`, { params }).pipe(pluck('sources')) as Observable<SourceResponse[]>;
  }
}
