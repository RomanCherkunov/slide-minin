const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIdx = 0

sidebar.style.top = `-${slidesCount - 1}00vh`

downButton.addEventListener('click', () => {
    changeSlide('down')
})
upButton.addEventListener('click', () => {
    changeSlide('up')
})

document.addEventListener('keydown', e => {
    if(e.key === 'ArrowDown'){
        changeSlide('down')
    } else if(e.key === 'ArrowUp'){
        changeSlide('up')
    }
})


function changeSlide (dir) {
    if(dir === 'up') {
        activeSlideIdx++
        if(activeSlideIdx === slidesCount) {
            activeSlideIdx = 0
        }
    } else if(dir === 'down') {
        activeSlideIdx--
        if(activeSlideIdx < 0) {
            activeSlideIdx = slidesCount -1
        }
    }

    const ContainerHeight = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIdx * ContainerHeight}px)`
    sidebar.style.transform = `translateY(${activeSlideIdx * ContainerHeight}px)`
}