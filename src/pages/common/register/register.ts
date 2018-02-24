import { Component } from '@angular/core';
import {NavController, ViewController, IonicPage, ActionSheetController} from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import {UserServiceProvider} from "../../../providers/biz/user-service";
import {NativeService} from "../../../providers/NativeService";

/**
 * 注册
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  // 定时器
  timer: any;
  // 表单
  registerForm: any;
  // 定时器计时
  time = 60;
  // 是否已获取验证码
  isrun: boolean = false;
  sex;
  params={
    loginName:"",
    password:"",
    telphone:"",
    sex:"",
    nickName:"",
    email:"",
    birthDate:"",
  }
  constructor(
    private viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController,
    private userService: UserServiceProvider,
    private nativeService: NativeService,
    private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      loginName: [, [Validators.required, Validators.pattern('1[0-9]{10}')]],
      verificationCode: [, [Validators.required, Validators.minLength(6)]],
      password: [, [Validators.required, Validators.minLength(6)]],
      secpassword: [, [Validators.required, Validators.minLength(6)]],
      sex: [,],
      email: [,],
      telphone: [, [Validators.required, Validators.pattern('1[0-9]{10}')]],
      nickName: [,],
      birthDate: [,],
    })

  };

  confirm() {
    this.registerForm.value.sex= this.sex;
    if(this.registerForm.value.password==this.registerForm.value.secpassword){
      this.params.loginName=this.registerForm.value.loginName;
      this.params.password=this.registerForm.value.password;
      this.params.telphone=this.registerForm.value.telphone;
      this.params.sex=this.sex;
      this.params.nickName=this.registerForm.value.nickName;
      this.params.email=this.registerForm.value.email;
      this.params.birthDate=this.registerForm.value.birthDate;
      this.userService.register(this.params).subscribe(data=>{
        this.nativeService.showToast('注册成功');
        this.viewCtrl.dismiss();
      })
    }else {
      this.nativeService.showToast('两次密码输入不一致');
    }

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // 选择性别
  sexActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择性别',
      buttons: [
        {
          text: '男',
          role: 'destructive',
          handler: () => {
            this.sex='男';
            this.registerForm.value.sex = '男';
          }
        }, {
          text: '女',
          handler: () => {
            this.sex='女';
            this.registerForm.value.sex = '女';
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

}
