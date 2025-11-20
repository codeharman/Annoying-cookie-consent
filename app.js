const mainPara = document.getElementById('main-para');
const modal = document.querySelector('.modal');
const acceptBtn = document.getElementById('accept');
const declineBtn = document.getElementById('decline');
const formData = document.querySelector('.form');
const modalPara = document.querySelector('.modal-para')

let text = ''
for (let i = 0; i < 10; i++) {
  text += `<p>Please note this is just parody I made this project for fun</p>`
}

mainPara.innerHTML = text

setTimeout(() => {
  modal.style.display = "block"
}, 3000)

declineBtn.addEventListener('mouseenter', () => {
  document.querySelector('.buttons').classList.toggle('reverse')
  // console.log('works')
})

formData.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(formData);
  const dataEntries = data.get("name")

  modalPara.innerHTML = `<h4>You're fool to believe in this</h4>`

  setTimeout(() => {
    modalPara.innerHTML = `<h4>hahahahah.... I'm Selling your Data</h4>`
  }, 1500)

  setTimeout(() => {
    modalPara.innerHTML = `
      <h3>${dataEntries} We have sold your data to Barbie</h3>
      <img class='imga' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRvcm5nemZoZGh0MWdtNXl4Nm9sNDl5cmg0ejFxejU5ZmZjejh2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MXWutj1pI3wTnvr78X/giphy.gif">
    `
  }, 3000)

})