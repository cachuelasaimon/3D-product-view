const container = document.querySelector('.container')
const card = document.querySelector('.card')
const sneaker = document.querySelector('.sneaker img')
const info = document.querySelector('.info')
const sizes = document.querySelector('.sizes')
const purchase = document.querySelector('.purchase')

container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / -30;

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

// Mouse In
container.addEventListener('mouseenter', e => {
    card.style.transition = `none`
    sneaker.style.transform = `translateZ(150px) rotateZ(-45deg)`
    info.style.transform = `translateZ(100px)`
    sizes.style.transform = `translateZ(100px)`
    purchase.style.transform = `translateZ(100px)`
})

// Mouse Out
container.addEventListener('mouseleave', e => {
    card.style.transition = `transform 0.5s ease`
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`
    info.style.transform = `translateZ(0px)`
    sizes.style.transform = `translateZ(0px)`
    purchase.style.transform = `translateZ(0px)`
})
