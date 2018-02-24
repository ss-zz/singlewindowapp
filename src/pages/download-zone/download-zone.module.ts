import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadZonePage } from './download-zone';

@NgModule({
  declarations: [
    DownloadZonePage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadZonePage),
  ],
})
export class DownloadZonePageModule {}
