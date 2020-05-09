var clickCount = 0;
if(clickCount%2 === 1){  //如果clickCount是奇数
    nav.style.color = '#007AFF'; //文字变为蓝色
    bar.style.visibility = 'visible';//蓝色条显示
    bar.style.width = '78px';//蓝色条变长
} else { //如果clickCount是偶数
    nav.style.color = 'black'; //文字变为黑色
    bar.style.visibility = 'hidden'; //蓝色条隐藏
    bar.style.width = '0px';//蓝色条变短
}
