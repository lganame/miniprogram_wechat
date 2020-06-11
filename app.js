//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
        wx.scanCode({
          complete: (res) => {console.log("扫码成功",res)},
        })
      },
      timeout: res =>{
        console.log("超时时间",res);
      },
      fail:res=>{
        console.log("调用失败",res);
      },
      complete: res=>{
        wx.showToast({title:'成功',icon:'success',duration:2000});
        console.log("无论成败都会执行",res);
        console.log("canIuse('CameraContextwx.onCompassChange()')",wx.canIUse('wx.onCompassChange()'));
        console.log("",wx.canIUse('wx.login()'));
        console.log(wx.base64ToArrayBuffer('base64'));
        console.log(wx.getSystemInfo({
          success: (res) => {console.log("系统信息",res)},
        }));
        console.log("系统信息sync",wx.getSystemInfoSync());
        console.log("获取全局唯一的版本更新管理器,用于小程序更新",wx.getUpdateManager());
        console.log("关闭wifi",console.log(wx.stopWifi({
          success: (res) => {console.log(res)},
        })));
        console.log("电量信息",wx.getBatteryInfo({
          success: (res) => {console.log(res)},
        }));
        //const t= wx.getLaunchOptionsSync();
        //debugger;
        //console.log(wx.getLaunchOptionsSync(),"小程序启动时的参数");
        //const enterOptionsSync = wx.getLaunchOptionsSync();
        //console.log("本次小程序启动时的参数",enterOptionsSync);
        //wx.onUnhandledRejection
        //wx.onThemeChange();
        //wx.onPageNotFound();  
        //wx.onError();
        //wx.onAudioInterruptionBegin((res) => {console.log(res)});
       //wx.onAudioInterruptionEnd((res) => {consloe.log(res)});                                                             
       //wx.offAppShow((res) => {console.log("切前台事件的回调","OFFAPPSHOW")});
       //wx.offAppHide((res) => {console.log("切后台事件的回调","OFF APP HIDE")})
       // 打开调试
       wx.setEnableDebug({
         enableDebug: true,
       })
       wx.setEnableDebug({
         enableDebug: false,
       })
       /*
      const logger = wx.getRealtimeLogManager();
      logger.info({str:'helloworld'},'info log',100,[1,2,3]);
      logger.error({str:'helloworld'},'error log',100,[1,2,3]);
      logger.warn({str:'helloworld'},'warn log',100,[1,2,3]);
      const logger2 = wx.getLogManager({level: 1})
      logger2.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
      logger2.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
      logger2.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
      logger2.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
      */
     
      }
     

    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})