App({
  onLaunch:function() {
    //提前从oneNET请求我们的项目数据，通过回调函数执行
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/505573417/datapoints?datastream_id=Light,Temperature,Humidity,Warning&limit=15',//request获取
      header: {
        'content-type': 'application/json',
        'api-key': 'WEWbFHnT0wE9XKLGCc2jN5HT=bU= '
      },
      success: function (res) {
        console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[2]
        app.globalData.humidity = res.data.data.datastreams[3]
        app.globalData.warning = res.data.data.datastreams[1]
        console.log(app.globalData.light)//
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }

    })
    //callback();//回调函数
  },
  onShow: function () {
  },
  onHide: function () {
  },

  //本应用全局数据
  globalData: {
    temperature: {},
    light: {},
    humidity: {},
    warning:{}
  }
})
