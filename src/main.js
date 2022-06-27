import './banner'
import './tabs'

import $ from 'jquery'
$('#swiper').css('background-color', 'pink')

import './styles/index.less'

import './styles/index.css'

import imgUrl from './assets/1.gif';
let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import imgUrl1 from './assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl1
document.body.appendChild(theImg)

import './assets/fonts/iconfont.css';

class App {
    static a = 123
}
console.log(App.a);