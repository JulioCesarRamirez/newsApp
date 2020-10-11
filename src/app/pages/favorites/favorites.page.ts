import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SourceResponse } from 'src/app/core/entities/news.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  sources: SourceResponse[];
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.getFavroties();
  }

  refresh() {
    this.getFavroties();
  }

  unfavorite(source: SourceResponse) {
    const index = this.sources.indexOf(source);
    this.sources.splice(index, 1);
    this.storage.set('favorite', JSON.stringify(this.sources));
  }

  private getFavroties() {
    this.storage.get('favorite').then(val => {
      if (!!val) {
        this.sources = JSON.parse(val);
      }
    });
  }

}
