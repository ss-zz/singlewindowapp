import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService';
import { StorageKVService } from '../StorageKVService';

/**
 * 一站式查询服务
 */
@Injectable()
export class OneStationService {

  // 执业医师搜索历史本地存储KEY
  private KEY_SEARCH_HISTORY_DOCTOR = "doctor";
  // 护士信息搜索历史本地存储KEY
  private KEY_SEARCH_HISTORY_NURSE = "nurse";
  // 医疗机构搜索历史本地存储KEY
  private KEY_SEARCH_HISTORY_HOSORG = "hosorg";
  // 养老驿站搜索历史本地存储KEY
  private KEY_SEARCH_HISTORY_YIZHAN = "yzhan";

  constructor(
    private httpService: HttpService,
    private kv: StorageKVService
  ) { }

  /**
   * 获取执业医师列表
   * @param params
   *            查询参数 
   */
  getDoctorList(params) {
    return this.httpService.get("onestopquery/doctor",params,false);
  }

  /**
   * 获取护士信息列表
   * @param params
   *            查询参数 
   */
  getNurseList(params) {
    return this.httpService.get("onestopquery/nurse",params,false);
  }

  /**
   * 获取医疗机构列表
   * @param params
   *            查询参数 
   */
  getHosOrgList(params) {
    return this.httpService.get("onestopquery/hosorg",params,false);
  }

  /**
   * 获取养老驿站列表
   * @param params
   *            查询参数 
   */
  getYZhanList(params) {
    return this.httpService.get("onestopquery/yzhan",params,false);
  }

  /**
   * 根据id获取详情
   * @param id
   *          主键id
   */
  getDetailById(id) {
    return this.httpService.get("onestopquery/yzhan",null,false)
  }

  //获取搜索历史列表
  getSearchList(type){
    return new Promise<Object>(resolve => {
      if(type=='01'){
        this.kv.get(this.KEY_SEARCH_HISTORY_DOCTOR).then(data => {
          resolve(data);
        })
      }
      if(type=='02'){
        this.kv.get(this.KEY_SEARCH_HISTORY_NURSE).then(data => {
          resolve(data);
        })
      }
      if(type=='03'){
        this.kv.get(this.KEY_SEARCH_HISTORY_HOSORG).then(data => {
          resolve(data);
        })
      }
      if(type=='04'){
        this.kv.get(this.KEY_SEARCH_HISTORY_YIZHAN).then(data => {
          resolve(data);
        })
      }
    });
  }

  //设置搜索历史列表
  setSearchList(type,data){
    return new Promise<Object>(resolve => {
      if(type=='01'){
        this.kv.set(this.KEY_SEARCH_HISTORY_DOCTOR, data);
      }
      if(type=='02'){
        this.kv.set(this.KEY_SEARCH_HISTORY_NURSE, data);
      }
      if(type=='03'){
        this.kv.set(this.KEY_SEARCH_HISTORY_HOSORG, data);
      }
      if(type=='04'){
        this.kv.set(this.KEY_SEARCH_HISTORY_YIZHAN, data);
      }
    })
  }

  //删除搜索历史列表
  delSearchList(type){
    return new Promise<Object>(resolve => {
      if(type=='01'){
        this.kv.remove(this.KEY_SEARCH_HISTORY_DOCTOR);
      }
      if(type=='02'){
        this.kv.remove(this.KEY_SEARCH_HISTORY_NURSE);
      }
      if(type=='03'){
        this.kv.remove(this.KEY_SEARCH_HISTORY_HOSORG);
      }
      if(type=='04'){
        this.kv.remove(this.KEY_SEARCH_HISTORY_YIZHAN);
      }
    })
  }

}
