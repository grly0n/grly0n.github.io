// const widthOutput = document.querySelector('#window-width')
// const heightOutput = document.querySelector('#window-height')
// widthOutput.textContent = window.innerWidth
// heightOutput.textContent = window.innerHeight

// function reportWindowSize() {
//   widthOutput.textContent = window.innerWidth
//   heightOutput.textContent = window.innerHeight
// }

// window.onresize = reportWindowSize
// let clicks = 0;



function initButtons() {
  const main = document.querySelector('main')
  main.style.display = 'grid'
  main.style.gridTemplateColumns = '1fr 1fr 1fr'
  main.style.padding = '0 4rem'

  for (let i = 0; i < 100; i++) {
    const button1 = document.createElement('button')
    button1.textContent = 'Click me'
    button1.style.padding = '3rem'
    button1.style.margin = '0.5rem'
    main.appendChild(button1)
  }
}

// initLabels()
// initButtons()