import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 操作指南
 */

@IonicPage()
@Component({
  selector: 'page-guides',
  templateUrl: 'guides.html',
})
export class GuidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidesPage');
  }

}
