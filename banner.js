define(["jquery"],function(u){return function(){return{animate1:function(i){var n={index:0,container:"body",time:2e3,img:["img/b1.png","img/b2.png","img/b3.png","img/b4.png","img/b5.png"]};u.extend(n,i);for(var e,t=u(i.container),d=u('<div class="slider" id="slider"></div>'),l=u('<span id="left"><</span>'),s=u('<span id="right">></span>'),a=u('<ul class="nav" id="navs"></ul>'),c=1,r=1;r<=n.img.length;r++){var g=u("<li>"+r+"</li>");a.append(g)}d.append(u('<div class="slide"><img src="'+n.img[n.img.length-1]+'" alt=""></div>'));for(var m=0;m<n.img.length;m++){var p=u('<div class="slide"><img src="'+n.img[m]+'" alt=""></div>');d.append(p)}function o(){n.index++,n.index>n.img.length&&(d.css("left","-1200px"),n.index=1),v(n.index),x(n.index)}d.append(u('<div class="slide"><img src="'+n.img[0]+'" alt=""></div>')),t.append(d),d.after(l),l.after(s),s.after(a),e=setInterval(o,n.time),t.mouseleave(function(){l.css("opacity","0"),s.css("opacity","0"),e=setInterval(o,n.time)}),t.mouseenter(function(){l.css("opacity","50%"),s.css("opacity","50%"),clearInterval(e)}),a.children("li").first().addClass("active"),l.click(function(){0!==c&&(c=0,n.index--,n.index<0&&(d.css("left",-1200*(n.img.length+1)+"px"),n.index=n.img.length-1),v(n.index),x(n.index))}),s.click(function(){0!==c&&(c=0,n.index++,n.index>n.img.length&&(d.css("left","-1200px"),n.index=1),v(n.index),x(n.index))});for(var f=0;f<a.children("li").length;f++)u(a.children("li")[f]).click(function(){n.index=u(this).index(),v(n.index),x(n.index)});function v(i){i+=1,d.stop().animate({left:1200*-i},900,function(){0===c&&(c=1)})}function x(i){i<0?i=n.n-1:i>n.img.length-1&&(i=0),a.children("li").siblings().removeClass("active"),a.children("li").eq(i).addClass("active")}}}}});