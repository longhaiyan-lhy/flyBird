import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class StartButton extends Sprite{
  constructor(){
    const img = Sprite.getImage('startButton');
    const canvas = DataStore.getInstance().canvas;
    const x = (canvas.width-img.width)/2;
    const y = (canvas.height-img.height)/2;
    super(img,0,0,img.width,img.height,x,y,img.width,img.height);
  }
}