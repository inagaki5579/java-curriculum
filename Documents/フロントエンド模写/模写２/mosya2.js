var pics_src = new Array("pics/top1.jpg", "pics/top2.jpg", "pics/top3.jpg");
var num = -1;

slideshow_timer();

function slideshow_timer() {
    if (num == 2) {
        num = 0;
    }
    else {
        num++;
    }
    document.getElementById("mypic").src = pics_src[num];
    setTimeout("slideshow_timer()", 5000);
}
//フェードインさせる要素を取得
const FADEIN_ELEM = document.getElementById('s_text');

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM.classList.add('s_text-after');
    } else {
        FADEIN_ELEM.classList.remove('s_text-after');
    }
});

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const header = document.querySelector('header');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    container.classList.toggle('active');
    header.classList.toggle('active');
});

//フェードインさせる要素を取得
const FADEIN_box1_1 = document.getElementById('box1_1');

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_box1_1_TOP = FADEIN_box1_1.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_box1_1_TOP + 200)) {
        FADEIN_box1_1.classList.add('box1_4');
    } else {
        FADEIN_box1_1.classList.remove('box1_4');
    }
});
//フェードインさせる要素を取得
const FADEIN_box2_1 = document.getElementById('box2_1');

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_box2_1_TOP = FADEIN_box2_1.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_box2_1_TOP + 200)) {
        FADEIN_box2_1.classList.add('box1_5');
    } else {
        FADEIN_box2_1.classList.remove('box1_5');
    }
});
//フェードインさせる要素を取得
const FADEIN_box3_1 = document.getElementById('box3_1');

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_box3_1_TOP = FADEIN_box3_1.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_box3_1_TOP + 200)) {
        FADEIN_box3_1.classList.add('box1_6');
    } else {
        FADEIN_box3_1.classList.remove('box1_6');
    }
});

const FADEIN_course = document.getElementById('course');

// //スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //     //フェードインする要素の上部の位置を取得する
    const FADEIN_course_TOP = FADEIN_course.getBoundingClientRect().top;
    //     //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //     //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_course_TOP + 200)) {
        FADEIN_course.classList.add('course-after');
    } else {
        FADEIN_course.classList.remove('course-after');
    }
});

const FADEIN_box2_mini1 = document.getElementById('box2_mini1');

window.addEventListener('scroll', () => {
    const FADEIN_box2_mini1_TOP = FADEIN_box2_mini1.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_box2_mini1_TOP + 200)) {
        FADEIN_box2_mini1.classList.add('box2_mini1-after');
    } else {
        FADEIN_box2_mini1.classList.remove('box2_mini1-after');
    }
});

const FADEIN_box2_mini2 = document.getElementById('box2_mini2');

window.addEventListener('scroll', () => {
    const FADEIN_box2_mini2_TOP = FADEIN_box2_mini2.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_box2_mini2_TOP + 200)) {
        FADEIN_box2_mini2.classList.add('box2_mini2-after');
    } else {
        FADEIN_box2_mini2.classList.remove('box2_mini2-after');
    }
});

const FADEIN_box2_mini3 = document.getElementById('box2_mini3');

window.addEventListener('scroll', () => {
    const FADEIN_box2_mini3_TOP = FADEIN_box2_mini3.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_box2_mini3_TOP + 200)) {
        FADEIN_box2_mini3.classList.add('box2_mini3-after');
    } else {
        FADEIN_box2_mini3.classList.remove('box2_mini3-after');
    }
});

const FADEIN_study = document.getElementById('study');

window.addEventListener('scroll', () => {
    const FADEIN_study_TOP = FADEIN_study.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_study_TOP + 200)) {
        FADEIN_study.classList.add('study-after');
    } else {
        FADEIN_study.classList.remove('study-after');
    }
});
const FADEIN_koe1 = document.getElementById('koe1');

window.addEventListener('scroll', () => {
    const FADEIN_koe1_TOP = FADEIN_koe1.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_koe1_TOP + 200)) {
        FADEIN_koe1.classList.add('koe-after');
    } else {
        FADEIN_koe1.classList.remove('koe-after');
    }
});
const FADEIN_koe2 = document.getElementById('koe2');

window.addEventListener('scroll', () => {
    const FADEIN_koe2_TOP = FADEIN_koe2.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_koe2_TOP + 200)) {
        FADEIN_koe2.classList.add('koe-after');
    } else {
        FADEIN_koe2.classList.remove('koe-after');
    }
});
const FADEIN_koe3 = document.getElementById('koe3');

window.addEventListener('scroll', () => {
    const FADEIN_koe3_TOP = FADEIN_koe3.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_koe3_TOP + 200)) {
        FADEIN_koe3.classList.add('koe-after');
    } else {
        FADEIN_koe3.classList.remove('koe-after');
    }
});
const FADEIN_question = document.getElementById('question');

window.addEventListener('scroll', () => {
    const FADEIN_question_TOP = FADEIN_question.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_question_TOP + 200)) {
        FADEIN_question.classList.add('question_title-after');
    } else {
        FADEIN_question.classList.remove('question_title-after');
    }
});

const p1 = document.getElementById('question_p1');
const p2 = document.getElementById('question_p2');
const p3 = document.getElementById('question_p3');
const a1 = document.getElementById('answer1');
const a2 = document.getElementById('answer2');
const a3 = document.getElementById('answer3');
const Q1 = document.getElementById('Q_1');
const Q2 = document.getElementById('Q_2');
const Q3 = document.getElementById('Q_3');

p1.addEventListener('click', function () {
    if (a1.style.display == "block") {
        a1.style.display = "none";
        Q1.textContent = '+';
    } else {
        a1.style.display = "block";
        Q1.textContent = '-';
    }
});
p2.addEventListener('click', function () {
    if (a2.style.display == "block") {
        a2.style.display = "none";
        Q2.textContent = '+';
    } else {
        a2.style.display = "block";
        Q2.textContent = '-';
    }
});
p3.addEventListener('click', function () {
    if (a3.style.display == "block") {
        a3.style.display = "none";
        Q3.textContent = '+';
    } else {
        a3.style.display = "block";
        Q3.textContent = '-';
    }
});