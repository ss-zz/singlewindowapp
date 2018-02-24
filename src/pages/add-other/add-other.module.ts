import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOtherPage } from './add-other';

@NgModule({
  declarations: [
    AddOtherPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOtherPage),
  ],
})
export class AddOtherPageModule {}
