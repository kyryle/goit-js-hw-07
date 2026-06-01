const inputChanger = document.querySelector('#name-input')
let spanChanged = document.querySelector('#name-output')

inputChanger.addEventListener('input', () => {
    spanChanged.textContent = inputChanger.value.trim()
    if (inputChanger.value.trim().length === 0) {
        spanChanged.textContent = 'Anonymous'
    }
})








