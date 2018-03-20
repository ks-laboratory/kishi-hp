import { Injectable } from '@angular/core';
import { NEWS } from './news';

@Injectable()
export class NewsService {

  news: {date: Date, title: string, en_title: string, abstract: string, en_abstract: string, detail: string, img_url: string}[]

  constructor() {
    this.news = NEWS;
  }

  getNews(): {date: Date, title: string, en_title: string, abstract: string, en_abstract: string, detail: string, img_url: string}[] {
    return this.news;
  }

  // 先頭からmaxまでのニュースを取得
  getRecentNews(max: number): {date: Date, title: string, en_title: string,
    abstract: string, en_abstract: string, detail: string, img_url: string}[] {
    return this.news.slice(0, max);
  }
}
