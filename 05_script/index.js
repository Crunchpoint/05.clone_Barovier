// main javascript

// wrap every single word with span tag
let tag = "",
  fadeInEffect = `fadeInUp 400ms 0ms 1 both`,
  fadeInEffect2 = `fadeInUp 1000ms 0ms 1 both`,
  revealEffect = `revealOpacity 2500ms 1 both`;

const visualTxt = document.querySelector(".wrapSpanH21");

function temp() {
  for (let i = 0; i < visualTxt.textContent.length; i++) {
    tag += `<span>${visualTxt.textContent[i]}</span>`;
  }
  visualTxt.innerHTML = tag;
}
temp();

// fadeInEffect declaration

// put <br> into between span tag
const addBr = document.querySelectorAll(".wrapSpanH21 span");
// pick 15th span tag
addBr[15].innerHTML = `<br>`;
// I set num = 0 and it srarts at 1..
let num = -1;
// put delay on each word
let inter = setInterval(() => {
  if (num < addBr.length - 1) {
    num++;
  } else {
    clearInterval(inter);
  }
  addBr[num].style.animation += fadeInEffect;
}, 50);

// scroll event
const elMain = document.querySelector("#main"),
  cont1txtBox = document.querySelectorAll(".fadeInEffect01"),
  elItemImg = document.querySelector(".content01-container img"),
  elItemCon = document.querySelector(".content01-img01 picture"),
  cont3txt = document.querySelector(".content03-text"),
  cont3b1 = document.querySelector(".content03-text a"),
  cont4img1 = document.querySelector(".content04-bg img:nth-child(2)"),
  cont5txtBox = document.querySelectorAll(".fadeInEffect02"),
  cont5Item = document.querySelectorAll(".contentSlider");
document.addEventListener("scroll", () => {
  let currentScrollValue = document.documentElement.scrollTop,
    value = window.pageYOffset / elItemCon.offsetTop + 1;
  // console.log("currentScrollValue is" + currentScrollValue);
  // text box fade in effect
  if (currentScrollValue > 700) {
    cont1txtBox.forEach((value, key) => {
      setInterval(() => {
        cont1txtBox[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  // background and font color effect
  if (currentScrollValue > 1500) {
    elMain.style.color = "#484848";
    elMain.style.backgroundColor = "white";
  } else if (currentScrollValue < 1500) {
    elMain.style.color = "#ffffff";
    elMain.style.backgroundColor = "black";
  }
  // image scaling
  elItemImg.style.transform = `scale(${value})`;

  if (currentScrollValue > 2900) {
    cont3txt.style.animation = revealEffect;
  }
  if (currentScrollValue > 3000) {
    cont3b1.style.animation = fadeInEffect2;
  }
  if (currentScrollValue > 4200) {
    cont4img1.style.transform = `scale(1)`;
  }
  if (currentScrollValue > 5100) {
    cont5txtBox.forEach((value, key) => {
      setInterval(() => {
        cont5txtBox[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  if (currentScrollValue > 5200) {
    cont5Item.forEach((value, key) => {
      setInterval(() => {
        cont5Item[key].style.animation = fadeInEffect2;
      }, key * 200);
    });
  }
  // console.log(currentScrollValue);
});

const follower = document.querySelector(".follower");

window.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX,
    mouseY = e.clientY;
  follower.style.left = mouseX + "px";
  follower.style.top = mouseY + "px";
});

const visualAll = document.querySelectorAll(".visual_container");

let zIndex = 5,
  idx = 0,
  idx2 = 1,
  innerWidth = window.innerWidth;

visualAll.forEach((value, key) => {
  visualAll[key].style = `width: ${innerWidth}px`;
});

function visualValue() {
  visualAll.forEach((value, key) => {
    visualAll[0].style.transform = `translate3d(calc(-${
      innerWidth * idx
    }px + 0%), 0px, 0px)`;
    visualAll[key].style.transform = `translate3d(calc(-${
      innerWidth * key
    }px + 100%), 0px, 0px)`;
  });
}
visualValue();

function nextImg() {
  // 첫번째 페이지 z인덱스로 뒤로 보냄
  visualAll[idx].style.transform = `translate3d(calc(-${
    innerWidth * idx
  }px + 0%), 0px, -500px)`;
  // opacity 0으로 사라짐
  visualAll[idx].style.opacity = `0`;
  // z-index 뒤로 보냄
  // visual1.style.zIndex = `${zIndex--}`;
  // idx++로 다음페이지 적용
  idx++;
  // 오른쪽 페이지 가지고옴
  visualAll[idx].style.transform = `translate3d(calc(-${
    innerWidth * idx2
  }px + 0%), 0px, 0px)`;
  // idx2++로 다음번에 적용
  idx2++;
}

function preImg() {
  idx2--;
  visualAll[idx].style.transform = `translate3d(calc(-${
    innerWidth * idx2
  }px + 100%), 0px, 0px)`;
  idx--;
  visualAll[idx].style.transform = `translate3d(calc(-${
    innerWidth * idx
  }px + 0%), 0px, 0px)`;
  visualAll[idx].style.opacity = `1`;
  // visual1.style.zIndex = `${zIndex++}`;
}

window.addEventListener("click", (e) => {
  console.log(e.clientX);
  if (e.clientX > innerWidth / 2 && idx < visualAll.length - 1) {
    console.log("next");
    nextImg();
  } else if (e.clientX < innerWidth / 2 && idx > 0) {
    console.log("prev");
    preImg();
  }
});
