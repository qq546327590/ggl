var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

Page({
    data: {
        imgUrls: [
            '../../image/1.jpg',
            '../../image/2.jpg',
            '../../image/3.jpg',
            '../../image/4.jpg',
            // '../../image/5.jpg',
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iconArray: [
            {
                "iconUrl": '../../image/icon/a1.png',
                "iconText": '认识瓜瓜龙'
            },
            {
                "iconUrl": '../../image/icon/a2.png',
                "iconText": '如何学习'
            },
            {
                "iconUrl": '../../image/icon/a3.png',
                "iconText": '你问我答'
            },
            {
                "iconUrl": '../../image/icon/a4.png',
                "iconText": '预约到店'
            }
            // {
            //     "iconUrl": '../../image/index/guide.jpg',
            //     "iconText": '用车指南'
            // }
        ],
        current_slider:1,
        current_slider_data:[
            
        ],
        s1_data:[
            { no: '1', goods_img: '../../image/productDetail/c1.png', goods_name: '英语双周体验计划', price: '￥19', ishot: 'HOT',navto: '/pages/spdetail/spdetail'},
            { no: '2', goods_img: '../../image/productDetail/c2.png', goods_name: '人文双周体验计划', price: '￥19', ishot: 'HOT' },
            { no: '3', goods_img: '../../image/productDetail/c3.png', goods_name: '思维双周体验计划', price: '￥19', ishot: 'HOT' },
            { no: '4', goods_img: '../../image/productDetail/c4.png', goods_name: '美术双周体验计划', price: '￥49', ishot: 'HOT' },
            // { no: '5', goods_img: '../../image/index/v40.jpg', goods_name: '沃尔沃v40', price: '￥230,900起', ishot: '' },
            // { no: '0', goods_img: '../../image/productDetail/xc90_top_image.jpg', goods_name: '沃尔沃XC90“充499抵6000”整车新车优惠券', price: '￥499', ishot: 'HOT', navto:'/pages/ticket_detail/ticket_detail'},
        ],
        s2_data:[
            { no: '1', goods_img: '../../image/productDetail/c5.png', goods_name: '英语系统计划', price: '￥3200', ishot: '' },
            { no: '2', goods_img: '../../image/productDetail/c6.png', goods_name: '人文系统计划', price: '￥3200', ishot: '' },
            { no: '3', goods_img: '../../image/productDetail/c7.png', goods_name: '思维系统计划', price: '￥3200', ishot: '' },
            /*{ no: '4', goods_img: '../../image/index/2-refrigerator.jpg', goods_name: '沃尔沃车载冰箱12L', price: '￥3707', ishot: '' },*/
            { no: '5', goods_img: '../../image/productDetail/c8.png', goods_name: '美术系统计划', price: '￥3200', ishot: '' }
        ],
        s3_data:[
            /*{ no: '0', goods_img: '../../image/index/pedal.jpg', goods_name: '沃尔沃XC90电动踏板', price: '￥5,888', ishot: '', navto: '/pages/pedal_detail/pedal_detail' },*/
            { no: '0', goods_img: '../../image/index/tyre.jpg', goods_name: 'XC90轮胎 275/45 R20', price: '￥2,888', ishot: '', navto: '/pages/pedal_detail/pedal_detail' },
            { no: '1', goods_img: '../../image/index/3-2.jpg', goods_name: 'V60行李架', price: '￥2,914', ishot: '' },
            { no: '2', goods_img: '../../image/index/3-3.jpg', goods_name: '倒车影像', price: '￥7,821', ishot: '' },
            /*{ no: '3', goods_img: '../../image/index/3-4.jpg', goods_name: '挡泥板', price: '￥4,402', ishot: '' },*/
            { no: '4', goods_img: '../../image/index/3-5.jpg', goods_name: '乘客舱成型塑料垫', price: '￥3,707', ishot: '' },
            { no: '5', goods_img: '../../image/index/3-6.jpg', goods_name: '婴儿安全座椅', price: '￥328', ishot: '' },
            { no: '6', goods_img: '../../image/index/3-7.jpg', goods_name: '儿童座椅', price: '￥328', ishot: '' }
        ],
        s4_data:[
            { no: '1', goods_img: '../../image/index/4-1.jpg', goods_name: '售后五次常规保养', price: '￥6,045', ishot: '' },
            { no: '2', goods_img: '../../image/index/4-2.jpg', goods_name: '5000元充值满送', price: '￥5,000', ishot: '' },
            { no: '3', goods_img: '../../image/index/4-2.jpg', goods_name: '10000元充值满送', price: '￥10,000', ishot: '' },
            { no: '4', goods_img: '../../image/index/4-2.jpg', goods_name: '20000元充值满送', price: '￥20,000', ishot: '' }
        ],
        
    },
    onLoad: function (e) {
        //将s1数据输入到current_slider_data
        //console.log(JSON.parse(JSON.stringify(this.data.s1_data)));
        this.setData({
            current_slider_data: this.data.s1_data
        })
        console.log(this.options.id);
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
    tapSlider: function(e){
        this.setData({
            current_slider:e.target.dataset.id,       
        })
        //TODO: 同时绑定current_slider_data, 
        console.log(this.data.current_slider)
        switch (this.data.current_slider){
            case '1':
                this.setData({
                    current_slider_data: this.data.s1_data
                });
                break;
            case '2':
                this.setData({
                    current_slider_data: this.data.s2_data
                });
                break;
            case '3':
                this.setData({
                    current_slider_data: this.data.s3_data
                });
                break;
            case '4':
                this.setData({
                    current_slider_data: this.data.s4_data
                });
                break;
        }
        
    },
    toSpDetail:function(event){
        var url_str = event.currentTarget.dataset.target;
        console.log("target url str:" + url_str);
        if (!url_str){
            url_str = '/pages/spdetail/spdetail';
        }
        wx.navigateTo({
            //url: '/pages/spdetail/spdetail',
            url: url_str
        })
    },
    consult:function(){
        wx.showModal({
            title: '预约成功',
            content: '预约成功',
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