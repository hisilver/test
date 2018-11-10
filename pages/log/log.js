var bmap = require('../../libs/bmap-wx.js');
Page({
  data: {
    weatherdata: ''
  },
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'QqPYDc7HWZzQFxGBgcFHxkpCDVCiG17o'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherdata: weatherData
      });
    }
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  }
})





// // 引用百度地图微信小程序JSAPI模块 
// var bmap = require('../../libs/bmap-wx.js');
// var wxMarkerData = [];
// Page({
//   data: {
//     markers: [],
//     latitude: '',
//     longitude: '',
//     placeData: {}
//   },
//   makertap: function (e) {
//     var that = this;
//     var id = e.markerId;
//     that.showSearchInfo(wxMarkerData, id);
//     that.changeMarkerColor(wxMarkerData, id);
//   },
//   onLoad: function () {
//     var that = this;
//     // 新建百度地图对象 
//     var BMap = new bmap.BMapWX({
//       ak: 'QqPYDc7HWZzQFxGBgcFHxkpCDVCiG17o'
//     });
//     var fail = function (data) {
//       console.log(data)
//     };
//     var success = function (data) {
//       wxMarkerData = data.wxMarkerData;
//       that.setData({
//         markers: wxMarkerData
//       });
//       that.setData({
//         latitude: wxMarkerData[0].latitude
//       });
//       that.setData({
//         longitude: wxMarkerData[0].longitude
//       });
//     }
//     // 发起POI检索请求 
//     BMap.search({
//       "query": '酒店',
//       fail: fail,
//       success: success,
//       // 此处需要在相应路径放置图片文件 
//       iconPath: '../images/locationred.png',
//       // 此处需要在相应路径放置图片文件 
//       iconTapPath: '../images/right.png'
//     });
//   },
//   showSearchInfo: function (data, i) {
//     var that = this;
//     that.setData({
//       placeData: {
//         title: '名称：' + data[i].title + '\n',
//         address: '地址：' + data[i].address + '\n',
//         telephone: '电话：' + data[i].telephone
//       }
//     });
//   },
//   changeMarkerColor: function (data, i) {
//     var that = this;
//     var markers = [];
//     for (var j = 0; j < data.length; j++) {
//       if (j == i) {
//         // 此处需要在相应路径放置图片文件 
//         data[j].iconPath = "../images/locationblack.png";
//       } else {
//         // 此处需要在相应路径放置图片文件 
//         data[j].iconPath = "../images/locationgreen.png";
//       }
//       markers[j](data[j]);
//     }
//     that.setData({
//       markers: markers
//     });
//   }
// })



// // pages/log/log.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     focus: false,
//     inputValue: null,
//     latitude:0,
//     longitude:0,
//     markers: [{
//       iconPath: "../images/locationgreen.png",
//       id: 0,
//       latitude: 34.60819,
//       longitude: 112.428209,
//       width: 50,
//       height: 50
//     }],
//     polyline: [{
//       points: [{
//         longitude: 112.428209,
//         latitude: 34.60819
//       }, {
//           longitude: 112.428209,
//           latitude: 34.71830,
//       }],
//       color: "#FF0000DD",
//       width: 2,
//       dottedLine: true
//     }],
//     controls: [{
//       id: 1,
//       iconPath: '../images/left.png',
//       position: {
//         left: 0,
//         top: 300 - 50,
//         width: 50,
//         height: 50
//       },
//       clickable: true
//     }]

//   },
//   bindButtonTap: function () {
//     this.setData({
//       focus: true
//     })
//   },
//   bindTextAreaBlur: function (e) {
//     console.log(e.detail.value)
//   },
//   getlocation:function(){
//       wx.getLocation({
//         success: function(res) {
//           var latitude = res.latitude
//           var longtitude = res.longitude
//           console.log("latitude:" + latitude)
//           console.log("longtitude:" + longtitude)
//         },
//       })
//   },
//   bindFormSubmit: function (e) {
//     var that=this;
//     var a=null;
//       that.setData({
//         a:inputValue,
//         longitude: 113.8878770
//     }),
//     console.log(e.detail.value.textarea),
//       wx.getLocation({//获取当前经纬度
//         type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
//         success: function (res) {
//           var latitude = res.latitude
//           var longtitude = res.longitude
//           console.log("latitude:"+latitude)
//           console.log("longtitude:"+longtitude)
//           // wx.openLocation({//​使用微信内置地图查看位置。
//           //    latitude:22,//要去的纬度-地址
//           //    longitude: 113.8878770000,//要去的经度-地址
//           //    name: "宝安中心A地铁口",
//           //    address: '宝安中心A地铁口'
//           // })
//         }
//       })
//   },
//   search:function(){
//     var that=this;
//     wx.getLocation({//获取当前经纬度
//       type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
//       success: function (res) {
  
//         wx.openLocation({//​使用微信内置地图查看位置。
//           latitude: 22.5542080000,//要去的纬度-地址
//           longitude: 113.8878770000,//要去的经度-地址
//           name: "宝安中心A地铁口",
//           address: '宝安中心A地铁口'
//         })
//       }
//     })
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     　　console.log('onLoad')
//     　　var that = this;
//     　　wx.getLocation({
//       　　　　success: function (res) {
//         　　　　　　wx.request({
//                 url: 'https://api.map.baidu.com/geoconv/v1/?coords=114.21892734521,29.575429778924&from=1&to=5&ak=QqPYDc7HWZzQFxGBgcFHxkpCDVCiG17o', data: {},
//           　　　　　　　　header: { 'Content-Type': 'application/json' },
//           　　　　　　　　success: function (ops) {
//             　　　　　　　　　　console.log(ops.data)
//           　　　　　　　　}
//         　　　　})
//         　　// console.log(res)
//         　　// that.setData({
//         　　// hasLocation: true,
//         　　// location: formatLocation(res.longitude, res.latitude)
//         　　// })
//       　　}
//     })

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })