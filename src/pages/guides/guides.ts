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

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {title: '2017版外国人永久居留身份证'},
      {title: '2015版往来台湾同行证'},
      {title: '2017版外国人永久居留身份证'},
      {title: '2017版外国人永久居留身份证'},
      {title: '2017版外国人永久居留身份证'},
      {title: '2017版外国人永久居留身份证'},
      {title: '2017版外国人永久居留身份证'},
      {title: '2017版外国人永久居留身份证'},
      {title: '2017版外国人永久居留身份证'}
    ];
  }

}
