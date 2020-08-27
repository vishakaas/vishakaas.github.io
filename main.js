console.log('It Works')

$(document).ready(function() {
    $('.submit').click(function (event) {
        console.log('Clicked Button')

        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length > 2) {
            statusElm.append('')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Please enter all fields.</div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Please enter all fields.</div>')
        }

        if(subject.length > 10) {
            statusElm.append('')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Please enter all fields.</div>')/
        }

        if(message.length > 10) {
            statusElm.append('')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>Please enter all fields.</div>')
        }
        
    })
})
