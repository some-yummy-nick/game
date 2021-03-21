export function modal() {
  const modal = document.getElementById('js-modal')
  const closeButton = document.getElementById('js-close-modal')
  const showButton = document.getElementById('js-show-modal')
  const overlay = document.getElementById('js-modal-overlay')
  const content = document.getElementById('js-modal-content')

  showButton.addEventListener('click', () => {
    modal.classList.add('show')
    updateTabIndex()
  })

  closeButton.addEventListener('click', () => {
    modal.classList.remove('show')
    removeTabindex()
  })

  overlay.addEventListener('click', () => {
    modal.classList.remove('show')
    removeTabindex()
  })

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      modal.classList.remove('show')
      removeTabindex()
    }
  })

  content.addEventListener('click', e => {
    e.stopPropagation()
  })

  const withoutFocus = ['a', 'button']
  const needFocus = ['.modal button']

  //Запирает focus внутри попапа
  function updateTabIndex() {
    withoutFocus.forEach(element => {
      const elements = document.querySelectorAll(element)
      elements.forEach(el => {
        el.setAttribute('tabindex', '-1')
      })
    })

    needFocus.forEach(element => {
      const elements = document.querySelectorAll(element)
      elements.forEach(el => {
        el.removeAttribute('tabindex')
      })
    })
  }

  //Возвращает tabindex в начальное состояние
  function removeTabindex() {
    withoutFocus.forEach(element => {
      const elements = document.querySelectorAll(element)
      elements.forEach(el => {
        el.removeAttribute('tabindex')
      })
    })
  }
}
