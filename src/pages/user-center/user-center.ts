import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/biz/user-service';
import {APP_SERVE_URL} from "../../providers/Constants";

/**
 * 用户中心/个人
 */
@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  // 用户信息
  user: any = {};
  // 是否登录
  isLogin: Boolean = true;
  //是否已认证
  isCheck: boolean = false;
  imgavter;
  state="01";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserServiceProvider
  ) { }

  // 每次页面进入
  ionViewWillEnter() {
    this.refreshUserInfo();
  }

  // 刷新用户信息
  refreshUserInfo() {

  }

  // 退出登录
  logout() {
    this.userService.logout().then(() => {
      this.refreshUserInfo();
    });
  }

  // 版本检测
  detectVersion() {
    alert("开发中");
  }

  // 清除缓存
  clearCache() {
    alert("开发中");
  }

}
