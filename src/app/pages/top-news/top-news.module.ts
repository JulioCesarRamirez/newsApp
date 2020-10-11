import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TopNewsPage } from './top-news.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TopNewsPageRoutingModule } from './top-new-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TopNewsPageRoutingModule
  ],
  declarations: [TopNewsPage]
})
export class TopNewsPageModule { }
