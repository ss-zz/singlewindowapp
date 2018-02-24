import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService';
import { StorageKVService } from '../StorageKVService';

/**
 * 资讯/栏目服务
 */
@Injectable()
export class NewsChannelService {

  // 资讯栏目本地存储KEY
  private KEY_NEWSCHANNEL = "newschannel";

  constructor(
    private httpService: HttpService,
    private kv: StorageKVService
  ) {}

  //获取所有栏目
  getAllNewsChannel(){
    return this.httpService.get("news/channels",null,false);
  }

  //获取被选中的栏目
  getSelectedList(){
    return new Promise<Object>(resolve =>
      this.kv.get(this.KEY_NEWSCHANNEL).then(data => {
        if(data){
          resolve(data);
        }else{
          let channel = [];
          this.getAllNewsChannel().subscribe(subData => {
            channel.push(subData[0]);
            resolve(channel);
          })
        }
      })
    );
  }

  //设置关注栏目列表
  setSelectedList(data){
    return new Promise<Object>(resolve =>
      //关注的栏目信息保存本地
      this.kv.set(this.KEY_NEWSCHANNEL, data).then(() => {
        resolve(data);
      })
    );
  }

}