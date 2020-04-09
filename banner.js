/* global define:true */
define(['jquery'], function($) {
    // var $banner = (function(){
    var Banner = function(){
        function animate1(conf){
            var cfg = {
                // 记录当前小圆点下标
                index : 0,
                // 默认挂载的DOM
                container:'body',
                // 默认轮播切换时间
                time:2000,
                // 默认轮播页面个数
                img:[
                    'img/b1.png',
                    'img/b2.png',
                    'img/b3.png',
                    'img/b4.png',
                    'img/b5.png'
                ] 
            };
            $.extend(cfg,conf);
            var $box = $(conf.container),
                $slider = $('<div class="slider" id="slider"></div>'),
                $left = $('<span id="left"><</span>'),
                $right = $('<span id="right">></span>'),
                $ul = $('<ul class="nav" id="navs"></ul>'),
                isload = 1,
                interval;
            // 初始化小圆点
            for(var i=1;i<=cfg.img.length;i++){
                var $li = $('<li>'+i+'</li>');
                $ul.append($li);
            }
            // 初始化轮播图片
            $slider.append($('<div class="slide"><img src="'+cfg.img[cfg.img.length-1]+'" alt=""></div>'));
            for(var j = 0; j<cfg.img.length;j++){
                var $div = $('<div class="slide"><img src="'+cfg.img[j]+'" alt=""></div>');
                $slider.append($div);
            }
            $slider.append($('<div class="slide"><img src="'+cfg.img[0]+'" alt=""></div>'));
            // 初始化
            $box.append($slider);
            $slider.after($left);
            $left.after($right);
            $right.after($ul);
            // 自动轮播
            function auto(){
              cfg.index++;
                    if(cfg.index>cfg.img.length){
                        $slider.css('left','-1200px');
                        cfg.index=1;
                    };
                    manimate(cfg.index);
                    change(cfg.index);
            }
            interval=setInterval(auto,cfg.time);
            // 鼠标离开自动轮播
            $box.mouseleave(function(){
                $left.css('opacity','0');
                $right.css('opacity','0');
                interval=setInterval(auto,cfg.time);
            });
            // 停止轮播
            $box.mouseenter(function(){
                $left.css('opacity','50%');
                $right.css('opacity','50%');
                clearInterval(interval);
            });
            $ul.children('li').first().addClass('active');
            // 上一张
            $left.click(function(){
              if(isload===0){
                return;
              }else{
                isload=0;
                cfg.index--;
                if(cfg.index<0){
                    $slider.css('left',(cfg.img.length+1)*(-1200)+'px');
                    cfg.index=cfg.img.length-1;
                };
                manimate(cfg.index);
                change(cfg.index);          
              }
            });
            // 下一张
            $right.click(function(){
              if(isload===0){
                return;
              }else{
                isload=0;
                cfg.index++;
                if(cfg.index>cfg.img.length){
                    $slider.css('left','-1200px');
                    cfg.index=1;
                };
                manimate(cfg.index);             
                change(cfg.index);
              }                
            });
            // 鼠标移上去小圆点切换
            for(var n = 0;n<$ul.children('li').length;n++){
                $($ul.children('li')[n]).click(function(){
                    cfg.index=$(this).index();
                    manimate(cfg.index);
                    change(cfg.index);
                });
            }
            // 切换动画
            function manimate(i){
                i=i+1;
                $slider.stop().animate({left:-i*1200},900,function(){
                  if(isload===0){
                    isload = 1;
                  }
                });
            };
            // 点击切换
            function change(i){
                if(i<0){
                    i=cfg.n-1;
                } else if(i>cfg.img.length-1){
                    i=0;
                };
                $ul.children('li').siblings().removeClass('active');
                $ul.children('li').eq(i).addClass('active');
            };   
        };
        return{
            animate1: animate1
        };
    // }());
    };
    return Banner;
});
    
