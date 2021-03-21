export function slider() {
  const prev = document.getElementById('js-prev')
  const next = document.getElementById('js-next')
  const wrapper = document.getElementById('js-slider-wrapper')

  const slideWidth = 60
  const slidesCount = 8

  next.addEventListener('click', () => {
    let current = wrapper.dataset.current
    let slide = wrapper.dataset.slide
    current++
    slide++

    if (slide >= slidesCount) {
      next.setAttribute('disabled', 'disabled')
      prev.removeAttribute('disabled')
    }
    wrapper.style.left = -current * slideWidth + 'px'

    wrapper.dataset.current = current
    wrapper.dataset.slide = slide
  })

  prev.addEventListener('click', () => {
    let current = wrapper.dataset.current
    let slide = wrapper.dataset.slide
    current--
    slide--

    if (slide <= slidesCount) {
      prev.setAttribute('disabled', 'disabled')
      next.removeAttribute('disabled')
    }
    wrapper.style.left = -current * slideWidth + 'px'
    wrapper.dataset.current = current
    wrapper.dataset.slide = slide
  })
}
