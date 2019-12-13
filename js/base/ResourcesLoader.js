import { Resources } from "./Resources.js";

/** 
  *  资源加载器
  * 保证canvas是在图片资源加载成功之后才开始渲染
*/
export class ResourcesLoader{
    constructor(){
        // 获取图片路径
        this.map = new Map(Resources);
        // console.log(this.map);
        // 遍历map集合，将其每一个value替换为图片对象
        for(let [key,val] of this.map){
            // console.log(key,val);
            const image = new Image();
            image.src = val;
            this.map.set(key,image);// 替换原来的值
        }
        // console.log(this.map);
    }
    /**
     *定义图片完全加载成功的方法
     *
     * @param {function} callback
     * @memberof ResourcesLoader
     */
    onloaded(callback){
        let count = 0;// 计数器
        for(let val of this.map.values()){
            val.onload = ()=>{
                count++;
                if(count >= this.map.size){
                    callback(this.map);
                }
            }
        }
    }
}