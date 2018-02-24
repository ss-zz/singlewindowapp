import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 业务办理
 */

@IonicPage()
@Component({
  selector: 'page-biz-process',
  templateUrl: 'biz-process.html',
})
export class BizProcessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BizProcessPage');
  }

}
