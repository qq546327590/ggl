//var WxAutoImage = require('../../js/detailImage.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            '../../image/productDetail/xc90_top_image.jpg',
            '../../image/productDetail/xc90_top_image.jpg',
            '../../image/productDetail/xc90_top_image.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iscollect: true,
        circular:true,
        detail_img_src_arr:[
            '../../image/productDetail/img1.jpg',
            '../../image/productDetail/img2.jpg',
            '../../image/productDetail/img3.jpg',
            '../../image/productDetail/img4.jpg',
            '../../image/productDetail/img5.jpg',
            '../../image/productDetail/img6.jpg',
            '../../image/productDetail/img7.jpg',
            '../../image/productDetail/img8.jpg',
            '../../image/productDetail/img9.jpg',
            '../../image/productDetail/img10.jpg',
            '../../image/productDetail/img11.jpg',
            '../../image/productDetail/img12.jpg',
            '../../image/productDetail/img13.jpg',
            '../../image/productDetail/img14.jpg'
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
            url: "/pages/ticket_pay/ticket_pay",
        })
    },
    consult:function(){
        wx.showModal({
            title: '拨打',
            content: '400-678-1200',
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