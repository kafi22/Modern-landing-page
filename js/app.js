const theBtn = document.querySelector('.burger');
const theNav = document.querySelector('.main-nav')

theBtn.addEventListener('click', () => {
      theNav.classList.toggle('active');
      theBtn.classList.toggle('toggle')
})