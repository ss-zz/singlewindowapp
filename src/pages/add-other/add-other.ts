import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 添加其他
 */

@IonicPage()
@Component({
  selector: 'page-add-other',
  templateUrl: 'add-other.html',
})
export class AddOtherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddOtherPage');
  }

}
