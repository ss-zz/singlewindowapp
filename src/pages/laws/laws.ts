import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { LawsHelpPage } from './laws-help/laws-help';

/**
 * 法律法规
 */

@IonicPage()
@Component({
  selector: 'page-laws',
  templateUrl: 'laws.html',
})
export class LawsPage {

  items = [];
  currentZone = 'yazhou';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    this.items = [
      { src: 'assets/img/country/jianpuzhai.png', name: '柬埔寨' },
      { src: 'assets/img/country/hanguoguoqi.png', name: '韩国' },
      { src: 'assets/img/country/feilvbin.png', name: '菲律宾' },
      { src: 'assets/img/country/chaoxian.png', name: '朝鲜' },
      { src: 'assets/img/country/balin.png', name: '巴林' },
      { src: 'assets/img/country/bajisitan.png', name: '巴基斯坦' },
    ];
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(LawsHelpPage);
    popover.present({
      ev: myEvent
    });
  }

}