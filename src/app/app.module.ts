// angular
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

// ionic
import { IonicApp, IonicModule, IonicErrorHandler, Config} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

// ionic-native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { AppVersion } from '@ionic-native/app-version';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker} from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Device } from '@ionic-native/device';
import { ZBar } from '@ionic-native/zbar';
import { MediaCapture} from "@ionic-native/media-capture";
import { Media} from "@ionic-native/media";
import { CallNumber } from '@ionic-native/call-number';

// 动画
import { ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave} from "./modal-transitions";

// 公共/模块组件
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

// 公共服务
import { GlobalData} from '../providers/GlobalData';
import { NativeService} from "../providers/NativeService";
import { HttpService} from '../providers/HttpService';
import { StorageKVService} from '../providers/StorageKVService';

// 业务模块/组件
import { WelcomePage } from '../pages/welcome/welcome';
import { NewsServiceProvider } from '../providers/biz/news-service';
import { UserServiceProvider } from '../providers/biz/user-service';
import { NewsChannelService } from '../providers/biz/NewsChannelService';
import { ChaoYangService } from '../providers/biz/chaoyang-service';
import { CommunityService } from '../providers/biz/community-service';
import { OneStationService } from '../providers/biz/one-station-service'
import { TestPositionService } from '../providers/biz/test-position-service'
import { MyService } from '../providers/biz/my-service'

//管道
import {DatePipe} from "@angular/common";
import {ImgService} from "../providers/ImgService";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,

    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true', // 是否隐藏全部子页面tabs
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      scrollAssist: false,
      autoFocusAssit: false,
      backButtonText: '',// 返回按钮文本
      preloadModules: true // 启用预加载
    }),
    IonicStorageModule.forRoot(
      {
        name: '__mydb',
        driverOrder: ['indexedb', 'sqlite', 'websql']
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WelcomePage
  ],
  providers: [
    DatePipe,
    ImgService,
    StatusBar,
    SplashScreen,
    Camera,
    Toast,
    File,
    FileTransfer,
    InAppBrowser,
    ImagePicker,
    Network,
    AppVersion,
    AppMinimize,
    SQLite,
    SQLitePorter,
    Device,
    ZBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeService,
    GlobalData,
    HttpService,
    StorageKVService,
    MediaCapture,
    File,
    Media,
    CallNumber,

    UserServiceProvider,
    NewsServiceProvider,
    NewsChannelService,
    ChaoYangService,
    CommunityService,
    OneStationService,
    TestPositionService,
    MyService
  ]
})
export class AppModule {

  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);
  }

}
