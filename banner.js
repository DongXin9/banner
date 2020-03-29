/* global define:true */
define(['jquery'], function($) {
// var $banner = (function(){
var Banner = function(){
    function animate(conf){
        var cfg = {
        // 记录当前小圆点下标
            index : 0,
            interval:''
        };
        $.extend(cfg,conf);
        var $box = $(conf.container),
            $slider = $('<div class="slider" id="slider"></div>'),
            $left = $('<span id="left"><</span>'),
            $right = $('<span id="right">></span>'),
            $ul = $('<ul class="nav" id="navs"></ul>');
        // 初始化小圆点
        for(let i = 1;i<=5;i++){
            let $li = $('<li>'+i+'</li>');
            $ul.append($li);
        }
        // 初始化轮播图片
        $slider.append($('<div class="slide"><img src="img/b5.png" alt=""></div>'))
        for(let j = 1; j<=5;j++){
            let $div = $('<div class="slide"><img src="img/b'+j+'.png" alt=""></div>');
            $slider.append($div);
        }
        $slider.append($('<div class="slide"><img src="img/b1.png" alt=""></div>'))
        // 初始化
        $box.append($slider);
        $slider.after($left);
        $left.after($right);
        $right.after($ul);
        // 自动轮播
        function auto(){
                cfg.index++;
                if(cfg.index>5){
                    $slider.css('left','-1200px')
                    cfg.index=1
                }
                manimate(cfg.index);
                change(cfg.index);
        }
        cfg.interval=setInterval(auto,2000);
        // 鼠标离开自动轮播
        $box.mouseleave(function(){
            $left.css('opacity','0');
            $right.css('opacity','0');
            cfg.interval=setInterval(auto,2000);
        })
        // 停止轮播
        $box.mouseenter(function(){
            $left.css('opacity','50%');
            $right.css('opacity','50%');
            clearInterval(cfg.interval);
        })
        $ul.children('li').first().addClass('active');
        // 上一张
        $left.click(function(){
            cfg.index--;
            if(cfg.index<0){
                $slider.css('left','-7200px')
                cfg.index=4
            }
            manimate(cfg.index);
            change(cfg.index);

        })
        // 下一张
        $right.click(function(){
            cfg.index++;
            if(cfg.index>5){
                $slider.css('left','-1200px')
                cfg.index=1
            }
            manimate(cfg.index);
            change(cfg.index);
        })
        // 鼠标移上去小圆点切换
        for(let n = 0;n<$ul.children('li').length;n++){
            $($ul.children('li')[n]).hover(function(){
                cfg.index=$(this).index();
                manimate(cfg.index);
                change(cfg.index);
            })
        }
        // 切换动画
        function manimate(i){
            i+=1;
            $slider.stop().animate({left:-i*1200},500)
        }
        // 点击切换
        function change(i){
            if(i<0){
                i=4;
            } else if(i>4){
                i=0;
            }
            $ul.children('li').siblings().removeClass('active');
            $ul.children('li').eq(i).addClass('active');
        }   
    }
    return{
        animate: animate
    }
// }());
};
return Banner;
});
