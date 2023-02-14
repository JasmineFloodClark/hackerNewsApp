import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HackerNewsService {
  constructor (
    private http: Http
  ) {}

  getNews() {
    return this.http.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`).pipe(map((res:Response) => res.json()));
  }
}
