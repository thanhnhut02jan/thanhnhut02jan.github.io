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

            var mail2 = document.querySelector('.mail_content .mail2');
            mail2.classList.remove('zoomIn');
            mail2.classList.add('zoomIn');

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

        setTimeout(() => {
            document.querySelector('.mail_content .mails-left span').textContent = 4 - n;
        }, 500);

        var a = document.querySelector('.mail_content .mails-left span');
        a.classList.add('blurOut');
        setTimeout(() => {
            a.classList.remove('blurOut');
        }, 1000);

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
        document.querySelector('.mail_content .mails-left span').textContent = 4;
    }
    isTyping = false;
}

var isTyping = false;
function typingAnimation(ele) {
    isTyping = true;
    text = ele.innerHTML;
    textLength = text.length;
    function typing (currentText, currentLength) {
        if (currentLength <= textLength && isTyping == true) {
            currentText = text.slice(0, currentLength);
            letter = text.slice(currentLength, ++currentLength);
            ele.innerHTML = currentText + letter;
            setTimeout(typing, 80, currentText, currentLength);
        } else if (isTyping == false){
            ele.innerHTML = text;   
        }
    };

    typing('', 0);
}

function showEnd() {
    var end = document.getElementById('end');
}
