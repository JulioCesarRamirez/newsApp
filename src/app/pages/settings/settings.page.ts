import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private storge: Storage, public toastController: ToastController) { }

  ngOnInit() {
  }

  onClearFavorites() {
    this.storge.remove('favorite');
    this.presentToast();
  }
  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cleared favorites',
      duration: 2000
    });
    toast.present();
  }
}
