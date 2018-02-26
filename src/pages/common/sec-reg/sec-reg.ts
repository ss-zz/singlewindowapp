import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../../tabs/tabs";

/**
 * Generated class for the SecRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sec-reg',
  templateUrl: 'sec-reg.html',
})
export class SecRegPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecRegPage');
  }
  final(){
    this.navCtrl.setRoot(TabsPage);
  }

}
