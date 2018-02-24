import { NgModule } from '@angular/core';
import { PermissionDirective } from './permission/permission';

/**
 * 指令模块
 */
@NgModule({
  declarations: [
    PermissionDirective,
  ],
  imports: [],
  exports: [
    PermissionDirective,
  ]
})
export class DirectivesModule { }
