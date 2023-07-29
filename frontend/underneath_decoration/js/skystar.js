// poem
var words = [
    '沈皓天',
    '翁歌华',
    '吴陈乐',
    '沈煜奇',
    '王元石',
    '郑舒乐怡',
    '赵书涵',
    '张乐程',
    '黄霏凡',
    '孙钱成',
    '许经纬',
    '周禾',
    '胡胜韬',
    '蔡贺丞',
    '苑东亭',
    '孙博爱',
    '牛濛',
    '李凌',
    '程炜晏', '陈科臻', '杜是也', '顾丁绮', '郭陈骋', '黄中和',
    '薛晨璐', '林洋伊', '王浩择', '周子涵', '郑乐阳', '孟子涵',
    '吴泽邦', '杨涵', '张栩汀', '楼鑫浩', '王从宇', '张一凡',
    '刘禹', '王宇皓', '周家炜', '王枫', '朱宸怿', 'Carson Gene',
    '章洪永','郭珍琦'
];
function randomNum(min, max) {
    var num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}
function init() {
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w => {
        let word_box = document.createElement('div');
        let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '32px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top", randomNum(-40, 20) + 'vh');
        word_box.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
        word_box.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
        word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load', init);
let textone = document.querySelector('.textone').querySelector('h1');
let texttwo = document.querySelector('.texttwo').querySelector('h1');
let textthree = document.querySelector('.textthree').querySelector('h1');

setTimeout(function () {
    textone.innerHTML = 'Welcome to Alpha College!';
    textone.style.color = '#E8F9FD';
    textone.style.fontFamily = '楷体'
    texttwo.style.color = '#E8F9FD';
    texttwo.style.fontFamily = '楷体'
    textthree.style.color = '#E8F9FD';
    textthree.style.fontFamily = '楷体'
    texttwo.innerHTML = '';
}, 28000)



