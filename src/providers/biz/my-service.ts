import { Injectable } from '@angular/core';

/**
 * 个人中心服务
 */
@Injectable()
export class MyService {

  //预约消息
  private appointList=[
    {id:1,title:"您已成功预约八里庄社区卫生服务中心免疫接种",date:"2018-01-09 07:25",childName:"球球",vaccinName:" 乙肝疫苗   （第2剂/共3剂）",vaccinDate:"2018-01-09 08:00-09:00",vaccinPwd:"111898"},
    {id:2,title:"您已成功预约八里庄社区卫生服务中心免疫接种",date:"2018-01-09 07:25",childName:"球球",vaccinName:" 乙肝疫苗   （第2剂/共3剂）",vaccinDate:"2018-01-09 08:00-09:00",vaccinPwd:"111898"},
    {id:3,title:"您已成功预约八里庄社区卫生服务中心免疫接种",date:"2018-01-09 07:25",childName:"球球",vaccinName:" 乙肝疫苗   （第2剂/共3剂）",vaccinDate:"2018-01-09 08:00-09:00",vaccinPwd:"111898"},
    {id:4,title:"您已成功预约八里庄社区卫生服务中心免疫接种",date:"2018-01-09 07:25",childName:"球球",vaccinName:" 乙肝疫苗   （第2剂/共3剂）",vaccinDate:"2018-01-09 08:00-09:00",vaccinPwd:"111898"},
  ];
  constructor(
  ) { }

  /**
   * 预约消息列表
   */
  getAppointList() {
    return new Promise<Object>(resolve => {
      resolve(this.appointList);
    });
  }

  /**
   * 根据id获取预约详情
   * @param id 
   */
  getAppointById(id){
    return new Promise<Object>(resolve => {
      for(let i in this.appointList){
        if(id==this.appointList[i].id){
          resolve(this.appointList[i]);
        }
      }
    });
  }

}
