import { ResourcesLoader } from "./js/base/ResourcesLoader.js";
import { DataStore } from "./js/base/DataStore.js";
import { Background } from "./js/runtime/Background.js";
import { Director } from "./js/Director.js";
import { Land } from "./js/runtime/Land.js";
import { Bird } from "./js/player/Birds.js";
import { Score } from "./js/player/Score.js";
import { StartButton } from "./js/player/StartButton.js";

export class Main{
    constructor(){
        // console.log("Main执行了");
        // 获取canvas
        this.canvas = wx.createCanvas();
        // this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        // 初始化资源加载器
        this.loader = new ResourcesLoader();
        // 获取变量池“
        this.dataStore = DataStore.getInstance();
        // 获取导演
        this.director = Director.getInstance();
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
        this.dataStore.imgs = map;
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.init();
    }



    // 初始化游戏数据
    init(){
        this.director.isGameOver = false;
        this.dataStore
            .put('background',new Background())
            .put('land',new Land())
            .put('pipes',[])
            .put('birds',new Bird())
            .put('score',new Score())
            .put('startButton',new StartButton());
        this.director.createPipe();
        this.director.run();
        this.addClick();
    }

    addClick(){
        // this.canvas.addEventListener('touchstart',e=>{
        wx.onTouchStart(e=>{
            // 点击事件有两个效果
            // 游戏结束，点击重新开始
            // 游戏进行中,点击小鸟向上一段距离
            if(this.director.isGameOver){
                // 游戏结束
                // this.dataStore.destroy();
                this.init();
            }else{
                // 游戏进行中, 小鸟向上一段距离
                this.director.birdsEvent();
            }
        });
    }
}