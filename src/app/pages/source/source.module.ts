import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourcePage } from './source.page';
import { SourcePageRoutingModule } from './source-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourcePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SourcePage]
})
export class SourcePageModule { }
