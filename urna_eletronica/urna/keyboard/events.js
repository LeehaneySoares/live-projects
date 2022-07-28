export default (keyboard) =>
  keyboard.botoes.forEach(element =>
    element.addEventListener('click', function () {
      const target = element.innerHTML

      return /btn/g.test(element.classList[1])
        ? keyboard.actions(String(target))
        : keyboard.changeValue(Number(target))
    })  
  )
