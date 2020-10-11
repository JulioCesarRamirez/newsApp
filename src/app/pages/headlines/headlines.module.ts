import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HeadlinesPage } from './headlines.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeadlinesPageRoutingModule } from './headliens-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HeadlinesPageRoutingModule
  ],
  declarations: [HeadlinesPage]
})
export class HeadlinesPageModule { }
