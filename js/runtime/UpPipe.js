import { Pipe } from "./Pipe.js";
import { Sprite } from "../base/Sprite.js";

export class UpPipe extends Pipe{
    constructor(top){
        const img = Sprite.getImage('upPipe');
        super(img,top);
    }
    draw(){
        // 在Pipe中已经改写了height的值为img.height
        // top的值: 0~300
        this.y = this.top - this.height;
        super.draw();
    }
}