window.onload = function () {


    /*
    * 图片左右按钮
    * */
    var index = 0;
    let anniu = document.getElementsByClassName("page");

    anniu[1].onclick = function () {
        index++;
        if (index == lbt.length) {
            index = 0;
        }
        for (let i = 0; i < li.length; i++) {
            lbt[i].className = "";
            li[i].style.background = 'white'
        }
        lbt[index].className = "lbt1";
        li[index].style.background = 'blue';
    };
    anniu[0].onclick = function () {
        if (index == 0) {
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

    /*
    * 图片随点动
    * */
    let tp = document.getElementsByClassName("dt");
    let lbt = tp[0].getElementsByTagName("img");
    let li = document.getElementsByClassName("dian");

    li[0].style.background = 'blue';
    for (let i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            for (let i = 0; i < li.length; i++) {
                lbt[i].className = '';
                li[i].style.background = 'white'

            }
            index = i;
            lbt[i].className = 'lbt1';
            this.style.background = 'blue'
        };
        /*  li[i].onmouseleave = function () {  //鼠标移动时切换
              lbt[i].className = '';
              this.style.background = 'white'
          };*/
    }
    /*
    * 鼠标移入滚动停止，移出滚动开始
    * */
    let gdt = document.getElementsByClassName("dongtu");
    // gdt[0].onmouseout=function () {
    //  tx1 =  setInterval(anniu[1].onclick,2500);
    // };

    let tx1 = setInterval(anniu[1].onclick, 2500);
    gdt[0].onmouseover = function () {
        console.log(123);
        clearInterval(tx1)
    };
    gdt[0].onmouseout = function () {
        setInterval(anniu[1].onclick, 2500);
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


};
