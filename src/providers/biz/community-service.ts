import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService';

/**
 * 社区活动服务
 */
@Injectable()
export class CommunityService {

  constructor(
    private httpService: HttpService
  ) { }

  /**
   * 社区活动信息
   */
  getDataCommunity(params) {
    return this.httpService.get("communityevent/list",params,false);
  }

  /**
   * 根据id获取社区活动详情
   * @param id
   *        活动id
   */
  getDataCommunityById(id){
    return this.httpService.get("communityevent/detail/" + id,false);
  }
}
