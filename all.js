// 設定預設值
let data = [`剪刀`,`石頭`,`布`]
let aResult 
let bResult 
let a = aResult
let b = bResult

// DOM
const refresh = document.querySelector(`.refresh`)
const a_Answer = document.querySelector(`.a_answer`)
const b_Answer = document.querySelector(`.b_answer`)
const resultShowTxt = document.querySelector(`.resultShowTxt`)

// 判斷用函式
function mora() {
  if (a === b) {
    resultShowTxt.textContent = `這局平手`;
  }else if (a === `剪刀`) {
    if (b ===`石頭`) {
      resultShowTxt.textContent = `這局A輸了`;
    }else {
      resultShowTxt.textContent = `這局A贏了`;
    }
  }else if (a === `石頭`) {
    if (b === `剪刀`) {
      resultShowTxt.textContent = `這局A贏了`;
    }else {
      resultShowTxt.textContent = `這局A輸了`;
    }
  }else {
    if (b === `剪刀`) {
      resultShowTxt.textContent = `這局A輸了`;
    }else {
      resultShowTxt.textContent = `這局A贏了`;
    }
  }
}
//取陣列值用函式
function randomResult() {
  aResult = data[Math.floor(Math.random()*3)]
  bResult = data[Math.floor(Math.random()*3)]
  a=aResult
  b=bResult
  a_Answer.textContent = `A出${a}`
  b_Answer.textContent = `B出${b}`
}
// 導出結果用函式
refresh.addEventListener(`click`, function () {
  randomResult()
  mora()
})










