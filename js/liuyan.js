window.onload = function () {
    //头像点击
    let imgs = document.querySelectorAll("img[id]");
    let up = 0;
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
            imgs[up].style.opacity = "0.5";
            this.style.opacity = "1";
            up = i;
        };
    }

    let spans = document.querySelector(".tnr");
    let textarea = document.querySelector("textarea");
    let user = document.querySelector("input[name=name]");
    //留言字数提示
    textarea.onkeyup = function () {
        let value = this.value;
        spans.innerText = "留言字数：" + value.length + "剩余字数：" + (textarea.maxLength - value.length);
    };


    let formss = document.forms;
    let messagebox = document.querySelector(".fb");
    let submit = document.querySelector("input[type=submit]");
    //提交按钮
    submit.onclick = function (e) {
        e.preventDefault();
        let images = imgs[up].src;
        let username = user.value.trim();
        let text = textarea.value;
        let date = new Date().toISOString().slice(0, 10);
        console.log(images);
        let box = {images, username, text, date};
        insertMessage(box);
        formss.form1.reset();
        /* spans.value="";
         textarea.value="";
         user.value="";*/
    };

    //插入
    function insertMessage({images, username, text, date}) {
        let html = `
              <div class="fb">
            <ul>
                <span class="tximg">
                    <img src="${images}" alt="" >
                </span>
                <p class="fbtime"><span>${date}</span>${username}</p>
                <p class="fbinfo">${text}</p>
            </ul>
        </div>
                `;
        messagebox.innerHTML = html + messagebox.innerHTML;
    }


};
