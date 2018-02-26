import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecRegPage } from './sec-reg';

@NgModule({
  declarations: [
    SecRegPage,
  ],
  imports: [
    IonicPageModule.forChild(SecRegPage),
  ],
})
export class SecRegPageModule {}
