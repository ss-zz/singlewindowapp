import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService';

/**
 * 健康自测服务
 */
@Injectable()
export class TestPositionService {
  constructor(private httpService: HttpService) {

  }
  private testPart= [
    {
      "id": "man_back",
      "partDesc": "男士背部",
      "sex": "男",
      "frontOrBack": "背面",
       "isSelect":false
    },
    {
      "id": "man_back_excretorypa",
      "partDesc": "男士排泄部",
      "sex": "男",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "man_back_head",
      "partDesc": "男士头部",
      "sex": "男",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "man_back_legs",
      "partDesc": "男士下肢",
      "sex": "男",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "man_back_upperlimb",
      "partDesc": "男士上肢",
      "sex": "男",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "man_front_abdomen",
      "partDesc": "男士腹部",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "man_front_chest",
      "partDesc": "男士胸部",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "man_front_genitals",
      "partDesc": "男士生殖器",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "man_front_head",
      "partDesc": "男士头部",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "man_front_legs",
      "partDesc": "男士下肢",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "man_front_neck",
      "partDesc": "男士颈部",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "man_front_upperlimb",
      "partDesc": "男士上肢",
      "sex": "男",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "skin",
      "partDesc": "皮肤",
      "sex": "",
      "frontOrBack": "",
      "isSelect":false
    },
  ];
  private wopart=[    {
    "id": "woman_back",
    "partDesc": "女士背部",
    "sex": "女",
    "frontOrBack": "背面",
    "isSelect":false
  },
    {
      "id": "woman_back_excretory",
      "partDesc": "女士排泄部",
      "sex": "女",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "woman_back_head",
      "partDesc": "女士头部",
      "sex": "女",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "woman_back_legs",
      "partDesc": "女士下肢",
      "sex": "女",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "woman_back_upperlim",
      "partDesc": "女士上肢",
      "sex": "女",
      "frontOrBack": "背面",
      "isSelect":false
    },
    {
      "id": "woman_front_abdomen",
      "partDesc": "女士腹部",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "woman_front_chest",
      "partDesc": "女士胸部",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "woman_front_genitals",
      "partDesc": "女士生殖器",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "woman_front_head",
      "partDesc": "女士头部",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "woman_front_legs",
      "partDesc": "女士下肢",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "woman_front_neck",
      "partDesc": "女士颈部",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "woman_front_upperlim",
      "partDesc": "女士上肢",
      "sex": "女",
      "frontOrBack": "正面",
      "isSelect":false
    },
    {
      "id": "skin",
      "partDesc": "皮肤",
      "sex": "",
      "frontOrBack": "",
      "isSelect":false
    },
    ]
  /**
   * 根据性别获取人体部位
   */
  getDataPerson(sex) {
    return new Promise<Object>(resolve => {
      if(sex=="男"){
        resolve(this.testPart);
      }else {
        resolve(this.wopart);
      }
    });
  }

  /**
   * 根据部位id获取症状
   * @param id
   */
  getSymptomByPart(params) {
      return this.httpService.get('smartguide/list/disease', params,false);
  }

  /**
   * 根据部位id和症状id获取描述
   * @param partId
   * @param symptomId
   */
  getDecribeBySymptom(params) {
    return this.httpService.get('smartguide/listall/question', params,false);
  }

  /**
   * 根据部位id、症状id和描述id获取自测结果
   * @param partId
   * @param symptomId
   * @param code
   */
  getResultTest(partId,symptomId,code){
  }

}
