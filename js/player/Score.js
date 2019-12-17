import { DataStore } from '../base/DataStore.js';

export class Score{
  constructor(){
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.scoreNum = 0;
    this.canAdd = true;// 加分的开关
  }
  draw(){
    this.ctx.font = '20px Arial';
    this.ctx.fillStyle = '#de335e';
    this.ctx.fillText(
      this.scoreNum,
      this.dataStore.canvas.width/2,
      this.dataStore.canvas.height/18);
  }
}