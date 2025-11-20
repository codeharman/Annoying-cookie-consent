const mainPara = document.getElementById('main-para');

let text = ''
for (let i = 0; i < 10; i++) {
  text += `<p>Please note this is just parody I made this project for fun</p>`
}

mainPara.innerHTML = text