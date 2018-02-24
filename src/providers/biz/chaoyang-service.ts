import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService';

/**
 * 数据朝阳服务
 */
@Injectable()
export class ChaoYangService {

  private chaoYangSort=[
    {type:'ylzy', name:'医疗资源', icon:'assets/img/chaoyang/hospital.png'},
    {type:'jbkz', name:'疾病控制', icon:'assets/img/chaoyang/illness.png'},
    {type:'wsjd', name:'卫生监督', icon:'assets/img/chaoyang/health.png'},
    {type:'jhsy', name:'计划生育', icon:'assets/img/chaoyang/family.png'}
  ];

  constructor(
    private httpService: HttpService
  ) { }

  /**
   * 数据朝阳分类信息
   */
  getDataChaoYangSort() {
    return new Promise<Object>(resolve => {
      resolve(this.chaoYangSort);
    });
  }

  /**
   * 数据朝阳信息
   * 
   * @param params
   *          查询参数
   */
  getDataChaoYang(params) {
    return this.httpService.get("datachaoyang/list",params,null);
  }

  /**
   * 根据id获取数据朝阳详情
   * 
   * @param id
   *        主键id
   */
  getDataChaoYangById(id){
    return this.httpService.get("datachaoyang/detail/" + id,null,null);
  }
}
