import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";
// 小鸟类
export class Bird extends Sprite{
    constructor(){
        const img = Sprite.getImage('birds');
        super(img,0,0,img.width,img.height,0,0,img.width,img.height);
        // 小鸟的宽:34 高:24 上下边距:10 左右边距:9
        // 裁剪的x坐标
        this.clippingX = [9,9+34+18,9+34*2+18*2];
        // 裁剪的y坐标
        this.clippingY = [10,10,10];
        // 裁剪的宽高
        this.clippingW = [34,34,34];
        this.clippingH = [24,24,24];
        // 小鸟的初始坐标
        const canvas = DataStore.getInstance().canvas;
        const birdsX = canvas.width/4;
        this.birdsX = [birdsX,birdsX,birdsX];
        const land = Sprite.getImage('land');
        const birdsY = (canvas.height - land.height)/2;
        this.birdsY = [birdsY,birdsY,birdsY];
        // 每只小鸟的宽高
        this.birdsW = [34,34,34];
        this.birdsH = [24,24,24];
        // 小鸟的实时y坐标
        this.y = [birdsY,birdsY,birdsY];
        this.index = 0;// 切换小鸟实现动态效果
        this.count = 0;// 计数器
        this.time = 0;// 计时器(自由落体时间)
    }
    draw(){
        this.count += 0.2;
        if(this.index >= 2){
            this.count = 0;
        }
        this.index = Math.floor(this.count);

        const g = 0.98/2.4;// 模拟重力加速度
        const offSetUp = 30;// 向上的偏移量
        const offSetY = (g*this.time*(this.time-offSetUp))/2;

        for(let i=0;i<3;i++){
            this.birdsY[i] = this.y[i] + offSetY;
        }

        this.time++;

        super.draw(this.img,this.clippingX[this.index],this.clippingY[this.index],this.clippingW[this.index],this.clippingH[this.index],this.birdsX[this.index],this.birdsY[this.index],this.birdsW[this.index],this.birdsH[this.index]);
    }
}