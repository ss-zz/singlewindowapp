import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * 下载专区
 */

@IonicPage()
@Component({
  selector: 'page-download-zone',
  templateUrl: 'download-zone.html',
})
export class DownloadZonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadZonePage');
  }

}
