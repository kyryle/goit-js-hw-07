const formListener = document.querySelector('form.login-form')

formListener.addEventListener('submit', event => {
    event.preventDefault()
    const formCollector = new FormData(formListener)
    

    const data = {
        email: formCollector.get('email').trim(),
        password: formCollector.get('password').trim(),
                
    }
    if (data.email.length === 0 || data.password.length === 0) {
        alert('All form fields must be filled in')
        return
    }
    console.log(data)
    formListener.reset()
})
