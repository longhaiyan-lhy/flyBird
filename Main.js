import { ResourcesLoader } from "./js/base/ResourcesLoader.js";
import { DataStore } from "./js/base/DataStore.js";

export class Main{
    constructor(){
        // console.log("Main执行了");
        // 获取canvas
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        // 初始化资源加载器
        this.loader = new ResourcesLoader();
        // 获取变量池“
        this.dataStore = DataStore.getInstance();
        // console.log(this.loader);
        // let land = this.loader.map.get('land');
        // let _this = this;
        // land.onload = function(){
        //     _this.ctx.drawImage(land,0,0,land.width,land.height,0,0,375,667);
        // }

        this.loader.onloaded(map=>this.onResoucesLoaded(map));
    }
    // 定义资源加载成功以后调用的方法
    onResoucesLoaded(map){
        // console.log(map);
        // 将资源保存到变量池中
        // 不适用put保存的原因: put保存的数据会定期销毁
        // 而使用属性的方式保存的数据是长期存在的，不会定期销毁
        this.dataStore.map = map;
        this.dataStore.ctx = this.ctx;
    }
}