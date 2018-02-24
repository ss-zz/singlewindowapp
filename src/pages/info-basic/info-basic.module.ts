import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoBasicPage } from './info-basic';

@NgModule({
  declarations: [
    InfoBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoBasicPage),
  ],
})
export class InfoBasicPageModule {}
