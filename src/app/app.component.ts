import { Component } from '@angular/core';

import { HackerNewsService } from './app.service';

@Component({
  selector: 'hacker-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class HackerNewsComponent {
  public news = {};
  constructor(private HackerNewsService: HackerNewsService) {
    this.HackerNewsService.getNews().subscribe(data => this.news = data);
  }
}
