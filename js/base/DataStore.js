/**
 * 变量池，用于保存游戏过程中的各种数据
 * 方便我们在不同的类中访问和修改变量
 */
export class DataStore{
    constructor(){
        this.map = new Map();
    }
    /**
     * 单例，整个游戏过程中只能出现一个变量池
     * 必须保证变量池的唯一(只有一个变量池)
     */
    static getInstance(){
        if(!DataStore.instance){
            // 没有实例
            DataStore.instance = new DataStore();
        }
        return DataStore.instance;
    }
    /**
     *  根据给定的key和val保存数据
     *
     * @param {String} key
     * @param {Object} val
     */
    put(key,val){
        this.map.set(key,val);
        return this;// 方便链式调用
    }
    /**
     *  get根据给定的key获取对应的值
     */
    get(get){
        return this.map.get(key);
    };
    /**
     *  游戏结束时，销毁上一局的数据
     */
    destroy() {
        for(let val of this.map.values){
            val = null;
        }
    }
}