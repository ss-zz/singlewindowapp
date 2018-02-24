import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 风险预警
 */

@IonicPage()
@Component({
  selector: 'page-warnings',
  templateUrl: 'warnings.html',
})
export class WarningsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WarningsPage');
  }

}
