const image = document.querySelector('.image-mask')
const section = document.querySelector('.circle-section')

const clamp = (val, min, max) => Math.max(min, Math.min(val, max))

window.addEventListener('scroll', () => {
  const sectionTop = section.offsetTop  // 문서 기준 top 위치
  const sectionHeight = section.offsetHeight

  const progress = clamp((scrollY - sectionTop) / (sectionHeight- innerHeight), 0, 1)
  
  const minRadius = 150
  const maxRadius = window.innerWidth * 1.5
  const radius = minRadius + (maxRadius - minRadius) * progress
  const right = Math.max(10, progress * 100 + 5)

  image.style.clipPath = `circle(${radius}px at right ${right}% top 50%)`
})
