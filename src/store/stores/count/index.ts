/**
 * 课程 对象池
 */
import { observable, computed, autorun } from "mobx";
import noticeCenter from "../../noticeCenter";
import counts from "./counts"


export default class ObservableStore {
    /**
     * 构造函数
     * @param noticeCenter 通知中心
     */
    constructor(public noticeCenter: noticeCenter) {

    }
   
    // 统计
    counts = new counts(this);

}




