import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 功能介绍
 */

@IonicPage()
@Component({
  selector: 'page-module-desc',
  templateUrl: 'module-desc.html',
})
export class ModuleDescPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuleDescPage');
  }

}
