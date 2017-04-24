//初始位置为页面顶部
var distance = 0;
//每触发一次滚动事件的移动距离
var step = 1000;

$(function() {
  //使用mousewheel插件捕获滚轮事件
  $("body").mousewheel(function(event, delta) {
    //计算要滚动的距离
    console.log('Mouse Delta:' + delta);
    if (delta < 0)
      distance += step;
    else {
      if (distance > 0)
        distance -= step;
    }
    console.log('Distance:' + distance);
    //用JS操控页面滚动
    scroll(0, distance);
    //阻止默认事件发生
    event.preventDefault();
  });
});