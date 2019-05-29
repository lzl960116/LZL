window.onload = function () {
    let li = document.getElementsByClassName("dian");
    for (let i = 0; i < li.length; i++) {
        li[i].onmouseenter = function () {
            li[i].style.background = 'red'
        };
        li[i].onmouseleave = function () {
            li[i].style.background = 'white'
        };
    }

    let pig = document.getElementsByClassName("wznr")[0];
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
    }

    let cow = document.getElementsByClassName('wenzi');
    console.log(cow);
    let cow2 = cow[0].getElementsByTagName("li");
    console.log(cow2);
    for (let i = 0; i < cow2.length; i++) {

        cow2[i].onclick = function () {
            for (let i=0;i<cow2.length;i++){
                cow2[i].className='';
            }
            cow2[i].className = 'cold';
        };
    }

};
