
import NoticeCenter from "./noticeCenter";

import Countdata from "./stores/count";

class store {
    constructor() {

        this.ready();
        this.init();
    }
    // 通知中心
    NoticeCenter = new NoticeCenter(this);
   
    // 课程
    Countdata = new Countdata(this.NoticeCenter);
    /**
     * 定义全局 变量 枚举 ===
     */
    ready() {
        console.log("-----------ready Store------------", this);
    }
    init() {

    }
};
export default new store();