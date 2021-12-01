var login = document.querySelector('.item-login')
var loginmobile = document.querySelector('.item-login1')
var modal = document.querySelector('.modal')
var close = document.querySelector('.login-header-close')
var login1 = document.querySelector('.login')
var bodyContainer = document.querySelector('.body-container')

var openMenu = document.querySelector('.menu-icon-js')
var menuPhone = document.querySelector('.menu-list__phone')

login.addEventListener('click', function(e){
    modal.classList.add('open')
})
loginmobile.addEventListener('click', function(e){
    modal.classList.add('open')
    menuPhone.classList.remove('open')
})

close.addEventListener('click', function(e){
    modal.classList.remove('open')
})

modal.addEventListener('click', function(event){
    modal.classList.remove('open')
    console.log('CHA')
})

openMenu.addEventListener('click', function(e) {
    menuPhone.classList.toggle('open')
})

// bodyContainer.addEventListener('click', function(event){
//     menuPhone.classList.remove('open')
//     console.log(event)
// })

 login1.addEventListener('click', function(event){
     event.stopImmediatePropagation()
  })
// menuPhone.addEventListener('click', function(event){
//     event.stopImmediatePropagation()
//  })

