export default function drag(obj) {
  let parentNode = window.self;
  let pWidth = parentNode.innerWidth,
    pHeight = parentNode.innerHeight;
  obj.addEventListener("touchstart", function(event) {
    //当只有一个手指时              .
    if (event.touches.length == 1) {
      //禁止浏览器默认事
      event.preventDefault();
    }
    let touch = event.targetTouches[0];
    let disX = touch.clientX - obj.offsetLeft,
      disY = touch.clientY - obj.offsetTop;
    let oWidth = obj.offsetWidth,
      oHeight = obj.offsetHeight;

    let touchMove = obj.addEventListener("touchmove", function(event) {
      let touch = event.targetTouches[0];
      obj.style.left = touch.clientX - disX + "px";
      obj.style.top = touch.clientY - disY + "px";
      //左侧
      if (obj.offsetLeft <= 0) {
        obj.style.left = 0;
      }
      //右侧
      if (obj.offsetLeft >= pWidth - oWidth) {
        obj.style.left = pWidth - oWidth + "px";
      }
      //上面
      if (obj.offsetTop <= 0) {
        obj.style.top = 0;
      }
      //下面
      if (obj.offsetTop >= pHeight - oHeight) {
        obj.style.top = pHeight - oHeight + "px";
      }
    });
    obj.addEventListener("touchend", function(event) {
      obj.removeEventListener("touchmove", touchMove);
      // obj.removeEventListener("touchend");
    });
  });
}
