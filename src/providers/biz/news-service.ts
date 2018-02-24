import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService';

/**
 * 新闻/资讯服务
 */
@Injectable()
export class NewsServiceProvider {

  constructor(
    private httpService: HttpService
  ) { }

  /**
   * //获取新闻资讯列表
   * 
   * @param params
   *            查询参数
   */
  getNewsList(params){
    return this.httpService.get("news/list",params,false);
  }

  /**
   * 根据id获取新闻详情
   * 
   * @param id
   *          新闻id
   */
  getNewsDetailById(id){
    return this.httpService.get("news/detail/" + id,null,false);
  }
}
