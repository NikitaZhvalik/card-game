(()=>{"use strict";const i=[{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"},{img:"./../static/img/cardShirt.png"}],t=[{img:"./../static/img/cards/Diamonds/6.png"},{img:"./../static/img/cards/Diamonds/7.png"},{img:"./../static/img/cards/Diamonds/8.png"},{img:"./../static/img/cards/Diamonds/9.png"},{img:"./../static/img/cards/Diamonds/10.png"},{img:"./../static/img/cards/Diamonds/J.png"},{img:"./../static/img/cards/Diamonds/Q.png"},{img:"./../static/img/cards/Diamonds/K.png"},{img:"./../static/img/cards/Diamonds/A.png"},{img:"./../static/img/cards/Clubs/6.png"},{img:"./../static/img/cards/Clubs/7.png"},{img:"./../static/img/cards/Clubs/8.png"},{img:"./../static/img/cards/Clubs/9.png"},{img:"./../static/img/cards/Clubs/10.png"},{img:"./../static/img/cards/Clubs/J.png"},{img:"./../static/img/cards/Clubs/Q.png"},{img:"./../static/img/cards/Clubs/K.png"},{img:"./../static/img/cards/Clubs/A.png"},{img:"./../static/img/cards/Hearts/6.png"},{img:"./../static/img/cards/Hearts/7.png"},{img:"./../static/img/cards/Hearts/8.png"},{img:"./../static/img/cards/Hearts/9.png"},{img:"./../static/img/cards/Hearts/10.png"},{img:"./../static/img/cards/Hearts/J.png"},{img:"./../static/img/cards/Hearts/Q.png"},{img:"./../static/img/cards/Hearts/K.png"},{img:"./../static/img/cards/Hearts/A.png"},{img:"./../static/img/cards/Spades/6.png"},{img:"./../static/img/cards/Spades/7.png"},{img:"./../static/img/cards/Spades/8.png"},{img:"./../static/img/cards/Spades/9.png"},{img:"./../static/img/cards/Spades/10.png"},{img:"./../static/img/cards/Spades/J.png"},{img:"./../static/img/cards/Spades/Q.png"},{img:"./../static/img/cards/Spades/K.png"},{img:"./../static/img/cards/Spades/A.png"}];function a(i){localStorage.setItem("level",JSON.stringify(i))}function g(){return localStorage.getItem("level")?JSON.parse(localStorage.getItem("level")):"easy"}g(),function(){const c=document.querySelector("#app"),s=`\n                <div class="wrapper">\n                    <div class="main__start-page">\n                        <h1 class="main__title">Выбери сложность</h1>\n                        <div class="main__btns">\n                            <label class="custom-radio custom-radio_1">\n                                <input type="radio" ${"easy"===g()?"checked":null} name="checkbox" value="easy">\n                                <span></span>\n                            </label>\n                            <label class="custom-radio custom-radio_2">\n                                <input type="radio" ${"medium"===g()?"checked":null} name="checkbox" value="medium">\n                                <span></span>\n                            </label>\n                            <label class="custom-radio custom-radio_3">\n                                <input type="radio" ${"hard"===g()?"checked":null} name="checkbox" value="hard">\n                                <span></span>\n                            </label>\n                        </div>\n                        <button class="btn main__btn-start" type="submit">\n                            Старт\n                        </button>\n                    </div>\n                </div>\n    `;c.innerHTML=s,document.querySelector(".custom-radio_1").addEventListener("change",(()=>a("easy"))),document.querySelector(".custom-radio_2").addEventListener("change",(()=>a("medium"))),document.querySelector(".custom-radio_3").addEventListener("change",(()=>a("hard"))),document.querySelector(".main__btn-start").addEventListener("click",(()=>function(){const a=JSON.parse(localStorage.getItem("level"));let g=i;function c(){document.querySelector("#app").innerHTML='\n                <div class="next-page">\n                    <div class="next-page__header">\n                        <div class="next-page__tamer">\n                            <p class="next-page__title">min</p>\n                            <h2 class="next-page__time">00.00</h2>\n                        </div>\n                        <button class="btn next-page__btn">Начать заново</button>\n                    </div>\n                    <div class="next-page__cards">\n                    </div>\n                </div>\n    ',g.forEach((i=>{!function(i){const t=`\n        <img src="${i.img}" alt="card">\n    `;document.querySelector(".next-page__cards").insertAdjacentHTML("afterbegin",t)}(i)}))}setTimeout((()=>{g=t,"easy"===a&&console.log("easy"),"medium"===a&&console.log("medium"),"hard"===a&&console.log("hard"),c()}),500),c()}()))}()})();