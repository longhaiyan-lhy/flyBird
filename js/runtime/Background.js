import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";
// 背景图类
export class Background extends Sprite{
    constructor(){
        // 获取背景图
        const img = Sprite.getImage('background');
        // 获取canvas的宽高
        const canvas = DataStore.getInstance().canvas;
        const width = canvas.width;
        const height = canvas.height;
        // 重写父类的构造
        super(img,0,0,img.width,img.height,0,0,width,height);
    }
}