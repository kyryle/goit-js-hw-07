const formListener = document.querySelector('button.submit')

formListener.addEventListener('submit', event => {
    event.preventDefault()
    const formCollector = new FormData(formListener)
    const email = formCollector.get('email').trim()
    const password = formCollector.get('password').trim()
    if (email.length === 0 || password.length === 0) {
        alert('All form fields must be filled in')
        return
    }

    const data = {
        email: formCollector.get('email').trim(),
        password: formCollector.get('password').trim(),
                
    }
    console.log(data)
    formListener.reset()
})
