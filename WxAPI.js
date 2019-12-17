export class WxAPI{
  constructor(){
    this.userInfo = null;
  }
  // 播放背景音乐
  playMusic(){
    const music = wx.createInnerAudioContext();
    music.src = "./audio/bgm.mp3";
    music.loop = true;// 循环播放
    // music.autoplay = true;// 自动播放
    music.play();
  }

  // 小鸟撞击的音效
  playBoom(){
    const music = wx.createInnerAudioContext();
    music.src = "./audio/boom.mp3";
    // music.autoplay = true;// 自动播放
    music.play();
  }

  // 获取手机的基本信息
  getSystemInfo(){
    wx.getSystemInfo({
      success(res){
        console.log(res);
      }
    })
  }

  // 获取登录用户的信息
  getUserInfo(callback){
    if(this.userInfo){
      callback();
      return;
    }
    // 创建用户信息按钮
    let button = wx.createUserInfoButton({
      type:"text",
      text:"点击授权",
      style:{
        left:60,
        top:200,
        width:200,
        height:50,
        backgroundColor:"#aabbcd",
        borderColor:"#403623",
        borderWidth:5,
        borderRadius:10,
        color:"#00ff00",
        textAlign:"center",
        lineHeight:50,
        fontSize:18
      }
    });
    // 监听用户点击按钮
    button.onTap(res=>{
      // console.log(res);
      if(res.userInfo){
        this.userInfo = res.userInfo;
        // 有userInfo说明已经授权过了
        button.destroy();
        callback();
      }
    });
  }

  // 发送http请求
  sendHttp(){
    wx.request({
      url:'http://localhost:4000',
      success(res){
        console.log(res);
      }
    })
  }

  // socket连接
  // 发送请求可以不返回响应
  socket(){
    // 连接服务器
    wx.connectSocket({
      url:'ws://localhost:4000',
      success(res){
        console.log('连接成功');
      },
      fail(err){
        console.log('连接失败');
      }
    });

    // 连接成功后
    wx.onSocketOpen(function(){
      // 向服务器发送数据
      wx.sendSocketMessage({
        data: "微信小游戏发送给服务器的数据",
      });
      // 接收服务器发送的数据
      wx.onSocketMessage(function(res){
        console.log(res);
      })
    })
  }


  // 下载文件
  downLoad(){
    wx.downloadFile({
      url:'',
      success(res){
        let path = res.tempFilePath;
        const music = wx.createInnerAudioContext();
        music.src = path;
        music.loop = true;// 循环播放
        // music.autoplay = true;// 自动播放
        music.play();
      }
    })
    /* wx.downloadFile({
      url:"http://img1.imgtn.bdimg.com/it/u=4238142487,3274484296&fm=26&gp=0.jpg",
      // filePath:'D:/',// 保存位置
      success(res){
        console.log('下载成功');
        let path = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(r){

          }
        })
      },
      fail(err){
        console.log('下载失败');
        console.log(err);
      }
    }) */
  }
}