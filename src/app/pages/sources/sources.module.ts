import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SourcesPage } from './sources.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SourcesPageRoutingModule } from './sources-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SourcesPageRoutingModule
  ],
  declarations: [SourcesPage]
})
export class SourcesPageModule { }
