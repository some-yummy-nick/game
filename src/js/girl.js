export function girl() {
  const go = document.getElementById('js-go')
  const girl = document.getElementById('js-girl')

  let step = 0

  const girlClasses = [
    'first',
    'second',
    'third',
    'fourth',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ]

  //Перемещает иконку по пути
  go.addEventListener('click', () => {
    clearClasses()
    if (girlClasses[step]) {
      girl.classList.add(girlClasses[step])
    } else {
      step = 0
      girl.classList.add('first')
    }
    step++
  })

  //Очищает предыдущие классы анимации
  function clearClasses() {
    girlClasses.forEach(girlClass => {
      if (girl.classList.contains(girlClass)) {
        girl.classList.remove(girlClass)
      }
    })
  }
}
