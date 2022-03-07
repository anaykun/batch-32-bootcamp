const emailReceiver = 'anaykun13@gmail.com'

function submitForm() {

    let name = document.getElementById('contact-input-name').value
    let email = document.getElementById('contact-input-email').value
    let number = document.getElementById('contact-input-phone').value
    let subject = document.getElementById('contact-input-subject').value
    let message = document.getElementById('contact-input-message').value

    if (name == '') {
        alert('Nama kamu harus diisi...')
    }
    if (email == '') {
        alert('Email kamu harus diisi...')
    }
    if (number == '') {
        alert('Nomor handphone kamu harus diisi...')
    }
    if (subject == '') {
        alert('Subject kamu harus diisi...')
    }
    if (message == '') {
        alert('Pesan kamu harus diisi...')
    }

    let sendEmail = { name, email, number, subject, message }
        // console.log(name)
        // console.log(email)
        // console.log(number)
        // console.log(subject)
        // console.log(message)

    let a = document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello%20my%20name%20${name}%2C%20${message}`
    a.click()

    sendEmail = "";


    // console.log(sendEmail)

}