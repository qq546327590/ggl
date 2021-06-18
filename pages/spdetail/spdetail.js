//var WxAutoImage = require('../../js/detailImage.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            '../../image/productDetail/c1.png',
            '../../image/productDetail/c1.png',
            '../../image/productDetail/c1.png'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iscollect: true,
        circular:true,
        detail_img_src_arr:[
            '../../image/productDetail/changtu.jpg'
        ]
    },
    collect: function(){
        this.setData({
            iscollect: !this.data.iscollect
        })
        //console.log(this.data.iscollect);
    },
    /*cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },*/
    toOrderPage:function(){
        wx.navigateTo({
            url: "/pages/qrcode/qrcode",
        })
    },
    consult:function(){
        wx.showModal({
            title: '拨打',
            content: '010-58341796',
            success: function (res) {
                if (res.confirm) {//这里是点击了确定以后
                    console.log('用户点击确定')
                } else {//这里是点击了取消以后
                    console.log('用户点击取消')
                }
            }
        })
    }
})