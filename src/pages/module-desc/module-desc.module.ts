import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModuleDescPage } from './module-desc';

@NgModule({
  declarations: [
    ModuleDescPage,
  ],
  imports: [
    IonicPageModule.forChild(ModuleDescPage),
  ],
})
export class ModuleDescPageModule {}
