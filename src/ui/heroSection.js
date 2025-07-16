const circelData = [
  { title: '7번가 피자'},
  { title: '요아정'},
  { title: '슬로우캘리'},
  { title: '포케올데이'},
  { title: '유케집'}
]

import img1 from '../assets/pig-play-1.png'
import img2 from '../assets/pig-play-2.png'
import img3 from '../assets/pig-play-3.png'
import img4 from '../assets/pig-play-4.png'
import img5 from '../assets/pig-play-5.png'

const image = document.querySelector('.image-mask')
const section = document.querySelector('.circle-section')

const imgs = [img1, img2, img3, img4, img5]

export const heroSectionRender = () => {
  circleMask()
  ballAni(circelData)
}

const circleMask = () => {

  const clamp = (val, min, max) => Math.max(min, Math.min(val, max))

  window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop  // 문서 기준 top 위치
    const sectionHeight = section.offsetHeight

    const progress = clamp((scrollY - sectionTop) / (sectionHeight- innerHeight), 0, 1)
    
    const minRadius = 150
    const maxRadius = window.innerWidth * 1.5
    const radius = minRadius + (maxRadius - minRadius) * progress
    const right = Math.max(10, progress * 100 + 3)

    image.style.clipPath = `circle(${radius}px at right ${right}% top 50%)`
  })

}

const blueBall = (index, title) => {
  const blueBallWrapper = document.querySelector('.blue-ball')

  const indexP = blueBallWrapper.querySelector('.index')
  indexP.innerHTML = index
  
  const titleH2 = blueBallWrapper.querySelector('h2')
  titleH2.innerHTML = title
}

const ballAni = (data) => {
  let i = 1
  blueBall(`01`, data[0].title)
  setInterval(() => {
    if(i > data.length - 1) i = 0
    const currentData = data[i]
    blueBall(`0${i+1}`, currentData.title)
    image.style.background = `url('${imgs[i]}') center/cover no-repeat`
    console.log(imgs[i])
    i++
  }, 2000)
}

