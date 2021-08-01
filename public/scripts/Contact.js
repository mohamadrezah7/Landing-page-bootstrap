const form = document.querySelector("#add-contact-form")

//saving data to database
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection("contact").add({
        name: form.name.value ,
        email: form.email.value ,
        message: form.message.value
    })
        // form.name.value = ''
        // form.email.value = ''
        // form.message.value = ''
        
        document.querySelector('.notice').setAttribute('style','display: inline !important;');
        
        //hide notice after 3 second
        setTimeout(() => {
        document.querySelector('.notice').setAttribute('style','display: none !important;');
        }, 3000);
        form.reset();
})