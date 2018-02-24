import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 法律法规
 */

@IonicPage()
@Component({
  selector: 'page-laws',
  templateUrl: 'laws.html',
})
export class LawsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawsPage');
  }

}
