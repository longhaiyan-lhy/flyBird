import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";

export class Land extends Sprite{
    constructor(){
        // 获取地板图片
        const img = Sprite.getImage('land');
        // 地板起点的高度
        const canvas = DataStore.getInstance().canvas;
        const y = canvas.height - img.height;
        // 重写Sprite构造
        super(img,0,0,img.width,img.height,0,y,img.width,img.height);
    }

    // 重写Sprite的draw方法
    // 让地板动起来
    draw(){
        this.x = this.x - 2;
        if(this.x < DataStore.getInstance().canvas.width-this.img.width){
            this.x = 0;
        }
        super.draw();
    }
}