function rotate() {
   let lastChild = document.querySelector('.slider div:last-child');
   /*$('#test').html(lastChild)*/
   document.querySelector('.slider div').classList.remove('firstSlide')
   document.querySelector('.slider div:last-child').remove();
   document.querySelector('.slider').prepend(lastChild)
   document.querySelector(lastChild).classList.add('firstSlide')
}

window.setInterval(function () {
   rotate()
}, 4000);
