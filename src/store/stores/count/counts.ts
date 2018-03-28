import { observable, computed, autorun } from "mobx";
import Http from "../../public/http";
import ObjectPool from "./index";
export default class ObservableStore {
    constructor(public ObjectPool: ObjectPool){}
    @observable data = {
        id: 0,
        name: "",
        semester: "", //学期
        courses_num: 0,//课程数
        class_num: 0,  //课数
        read_num: 0,   //已读
        surplus_num: 0,//剩余
        tag: [],       //标签
        list: []       //list列表中的信息
    }
    @observable showToggle = true
    @observable loading = true
    async getCountDate(){
        this.loading = true
        this.data = await Http.get('/curriculum/statistics').toPromise();
        this.loading = false
    }
    handleClick(){
        this.showToggle = !this.showToggle
    }
}