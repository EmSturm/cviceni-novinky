

const bodyElement = document.querySelector('body')

bodyElement.style.backgroundColor = '#e9e9e9'

const newsElement = document.querySelector('.news')

newsElement.style.backgroundColor = 'white'
newsElement.style.maxWidth = '60rem'

const h1Element = document.querySelector('h1')

h1Element.classList.add('news__title')

h1Element.textContent = 'Aktuální novinky'

const zprava1Element = document.querySelector('#zprava1')

zprava1Element.classList.add('post--main')

const zprava3ImgElement = document.querySelector('#zprava3 img')

zprava3ImgElement.src = 'images/zprava3-novy.jpg'



