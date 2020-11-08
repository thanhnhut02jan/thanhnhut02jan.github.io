const audio = document.getElementById('audio');
audio.volume = 0;

function start() {

    picStart = document.getElementById("startBtn");
    picStart.classList.add("hidden");

    anime({
        targets: '#mail_box',
        scale: 3,
        duration: 1200
    });

    mailBoxLid = document.getElementById('mailbox_lid');
    mailBoxLid.addEventListener("click", () => {
        mailBoxLid.classList.add("openLid");
        
        anime({
            targets: '#mail',
            translateX: [
                { value: -500, delay: 1000, duration: 1000, easing: 'easeOutExpo' }
            ],
            scale: [
                { value: 2, duration: 700, delay: 1000, easing: 'easeOutExpo' },
                { value: 1.5, easing: 'easeOutExpo' }
            ]
        });

        mail = document.getElementById('mail');
        mail.addEventListener("click", () => {
            mailContent = document.getElementsByClassName('mail_content')[0];
            mailContent.classList.remove("hidden");

            anime({
                targets: '.mail_content .mail2',
                scale: 25,
                duration: 2000
            });

            anime({
                targets: '#mail_box',
                opacity: 0,
                easing: 'easeOutExpo'
            });

            mailLeftBtn = document.getElementById('mails_left_btn');
            mailLeftBtn.addEventListener('click', fadeInContentsImg)

        });
    });

}

function removeAndAddClass(ele, removeClass, addClass) {
    ele.classList.remove(removeClass);
    ele.classList.add(addClass);
}

var n = 0;
var isShowing = false;
var fadeInContentsImg = () => {
    if (!isShowing) {
        n++
        if (n > 4) {
            n = 1
        }
        document.getElementById('mails_left_btn').innerHTML = 4 - n;

        var img = document.querySelector(`.mail_content div:nth-child(${n})`);
        img.classList.remove("fadeOut");
        removeAndAddClass(img, "hidden", "fadeIn");
        typingAnimation(document.querySelector(`.mail_content div:nth-child(${n}) p`));

        isShowing = true; 
    }
    
}
// change remove > replace
function closeImg(){
    var img = document.querySelector(`.mail_content div:nth-child(${n})`);
    removeAndAddClass(img, "fadeIn", "fadeOut");
    setTimeout(() => {
        img.classList.replace("fadeOut", "hidden");
    }, 1000)
    isShowing = false;
    if ((4 - n) == 0) {
        document.getElementById('mails_left_btn').innerHTML = 4;
    }
    isTyping = false;
}

var isTyping = false;
function typingAnimation(ele) {
    isTyping = true;
    text = ele.textContent;
    textLength = text.length;
    function typing (currentText, currentLength) {
        if (currentLength < textLength && isTyping == true) {
            currentText = text.slice(0, ++currentLength);
            ele.textContent = currentText;
            console.log(currentText);
            setTimeout(typing, 50, currentText, currentLength);
        } else if (isTyping == false){
            ele.textContent = text;   
        }
    };

    typing('', 0);
}

function showEnd() {
    var end = document.getElementById('end');
}
