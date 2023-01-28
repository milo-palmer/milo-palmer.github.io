let pDiv = document.getElementById('p-div')

let btnLeft = document.getElementById('btn-left')

let para = document.getElementById('para')

let goneRight = false

function pressRight() {
  pDiv.classList.add('text-right')
  btnLeft.textContent = 'bring it back'
  if (!goneRight) {
    para.textContent = 'Nice you changed me'
  }
  goneRight = true
}

function pressLeft() {
  pDiv.classList.remove('text-right')
  btnLeft.textContent = "It's above me"
  if (goneRight) {
    para.textContent = 'You can keep changing my position'
  }
}
