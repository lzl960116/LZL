window.onload = function () {
    /*
    * 图片左右按钮
    * */
    let li = document.getElementsByClassName("dtlist");
    let lo = li[0].getElementsByTagName("li");
    let current = 0, next = 0;
    /* var index = 0;*/
    let tp = document.getElementsByClassName("dt");
    let lbt = tp[0].getElementsByTagName("li");
    let anniu = document.getElementsByClassName("page");
    let w = lbt[0].offsetWidth;
    /* anniu[1].onclick = function () {
         index++;
         if (index === lbt.length) {
             index = 0;
         }
         for (let i = 0; i < li.length; i++) {
             lbt[i].className = "";
             li[i].style.background = 'white'
         }
         lbt[index].className = "lbt1";
         li[index].style.background = 'blue';
         }*/
    anniu[1].onclick = function () {
        next++;
        if (next === lbt.length) {
            next = 0;
        }
        lbt[next].style.left = w + 'px';
        lo[current].classList.remove("dian");
        lo[next].classList.add("dian");
        animate(lbt[current], {left: -w});
        animate(lbt[next], {left: 0});
        current = next;
    };
    /*anniu[0].onclick = function () {
        if (index === 0) {
            index = lbt.length;
        }
        index--;
        for (let i = 0; i < li.length; i++) {
            lbt[i].className = "";
            li[i].style.background = 'white'
        }
        lbt[index].className = "lbt1";
        li[index].style.background = 'blue';
    };
*/
    anniu[0].onclick = function () {
        next--;
        if (next < 0) {
            next = lbt.length - 1;
        }
        console.log(lbt[next]);
        console.log(next);
        lbt[next].style.left = -w + 'px';
        lo[current].classList.remove("dian");
        lo[next].classList.add("dian");
        animate(lbt[current], {left: w});
        animate(lbt[next], {left: 0});
        current = next;
    };

    /*
    * 图片随点动
    * */
    for (let i = 0; i < lo.length; i++) {
        lo[i].onclick = function () {
            if (next === i) {
                return;
            }
            next = i;
            if (next > current) {
                lbt[next].style.left = w + 'px';
                animate(lbt[current], {left: -w});
                animate(lbt[next], {left: 0});
            } else {
                lbt[next].style.left = -w + 'px';
                animate(lbt[current], {left: w});
                animate(lbt[next], {left: 0});
            }

            lo[current].classList.remove("dian");
            lo[next].classList.add("dian");

            current = next;
        }

    }

    /* li[0].style.background = 'blue';
     for (let i = 0; i < li.length; i++) {
         li[i].onclick = function () {
             for (let i = 0; i < li.length; i++) {
                 lbt[i].className = '';
                 li[i].style.background = 'white'
             }
             current = i;
             lbt[i].className = 'lbt1';
             this.style.background = 'blue'
         };
     }*/
    /*  li[i].onmouseleave = function () {  //鼠标移动时切换
          lbt[i].className = '';
          this.style.background = 'white'
      };*/
    /* }*/
    /*
    * 鼠标移入滚动停止，移出滚动开始
    * */
    let gdt = document.getElementsByClassName("dongtu");
    let tx1 = setInterval(anniu[1].onclick, 2500);

    gdt[0].onmouseover = function () {
        clearInterval(tx1)
    };
    gdt[0].onmouseout = function () {
        tx1 = setInterval(anniu[1].onclick, 2500);
    };
    /*
    * 第一种方法
    * */
    /*    let pig = document.getElementsByClassName("wznr")[0];
        let pig2 = pig.getElementsByTagName("li");
        pig.onmouseleave = function () {
            for (let i = 0; i < pig2.length; i++) {
                pig2[i].className = ''
            }
            pig2[0].className = 'hot'
        };
        for (let i = 0; i < pig2.length; i++) {
            pig2[i].onmouseenter = function () {
                pig2[i].className = 'hot';
            };
            pig2[i].onmouseleave = function () {
                pig2[i].className = '';
            }
        }*/
    /*
    * 第二种方法
    * */
    let pig3 = document.querySelectorAll(".wznr");
    pig3[0].onmouseout = function () {
        for (let i = 0; i < pig4.length; i++) {
            pig4[i].classList.remove("hot")
        }
        pig4[0].classList.add("hot")
    };
    let pig4 = document.querySelectorAll(".wznr > li");
    pig4.forEach(function (elam, index) {
        elam.onmouseover = function () {
            for (let i = 0; i < pig4.length; i++) {
                pig4[i].classList.remove("hot")
            }
            this.classList.add("hot")
        }
    });


    let cow = document.getElementsByClassName('wenzi');
    let cow2 = cow[0].getElementsByTagName("li");

    for (let i = 0; i < cow2.length; i++) {
        cow2[i].onclick = function () {
            for (let i = 0; i < cow2.length; i++) {
                cow2[i].className = '';
            }
            cow2[i].className = 'cold';
        };
    }
    /*
    * 按需加载图片
    * */
    let viewH = window.innerHeight;
    console.log(viewH);
    let dogs = document.querySelectorAll(".dog");
    let alldog = [];
    dogs.forEach(function (ele) {
        let baba = ele.offsetParent;
        alldog.push(baba.offsetTop + ele.offsetTop);

    });
    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for (let i = 0; i < alldog.length; i++) {
            if (scrolltop + viewH >= alldog[i] + 60) {
                dogs[i].src = dogs[i].getAttribute('aa')
            }
        }
    }
};
