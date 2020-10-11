import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
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

  constructor(
    private newsServices: NewsService,
    private storage: Storage,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.newsServices.getSourcesData().subscribe((s: SourceResponse[]) => this.sources = s));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  favorite(source: SourceResponse) {
    this.storage.get('favorite').then(val => {
      let items = [];
      if (!!val) {
        items = JSON.parse(val);
      }
      items.push(source);
      this.storage.set('favorite', JSON.stringify(items));
      this.presentToast();
    });
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Added to favorite.',
      duration: 2000
    });
    toast.present();
  }

}
