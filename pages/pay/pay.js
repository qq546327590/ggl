Page({
    data:{
        choose_goods_arr:[
            /*{no:'1',src:'../../image/productDetail/xc90_top_image.jpg',name:'沃尔沃XC90',num:1,price:'￥643,800',priceValue:643800},
            { no: '2', src: '../../image/index/pedal.jpg', name: '沃尔沃XC90电动踏板', num: 1, price: '￥5,888', priceValue: 5888, navto:'/pages/pedal_detail/pedal_detail' },*/
            { no: '2', src: '../../image/productDetail/c1.png', name: '英语双周体验计划', num: 1, price: '￥19', priceValue: 19, navto: '/pages/pedal_detail/pedal_detail' },
        ],
        total_amt:0,
        pay_address_arrow:'../../image/icon-arrow.png',
        header_src:'../../image/icon-profile-photo.png',
        wechat_pay_img_src:'../../image/wechat_pay.png',
        pay_view_display:"none",
        Length: 6,    //输入框个数 
        isFocus: true,  //聚焦 
        Value: "",    //输入的内容 
        ispassword: true, //是否密文显示 true为密文， false为明文。 
    },
    onLoad:function(options){
        var temp_amt = 0;
        for (var i = 0; i < this.data.choose_goods_arr.length; i++) {
            temp_amt = temp_amt + this.data.choose_goods_arr[i].priceValue * 1 * this.data.choose_goods_arr[i].num
        }
        temp_amt = '￥' + (temp_amt + '').replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return s + ','
        });
        this.setData({
            total_amt: temp_amt,
        });
    },
    toPay:function(){
        this.setData({
            pay_view_display:'block',
        });
    },
    toSpDetail:function(event){
        var url_str = event.currentTarget.dataset.target;
        console.log("target url str:" + url_str);
        if (!url_str) {
            url_str = '/pages/spdetail/spdetail';
        }
        wx.navigateTo({
            //url: '/pages/spdetail/spdetail',
            url: url_str
        })
    },
    payComplete:function(){
        wx.showToast({
            title: '支付成功',
            icon:'success',
            duration:2000
        });
        this.setData({
            pay_view_display: 'none',
        });
    },
    
  
})