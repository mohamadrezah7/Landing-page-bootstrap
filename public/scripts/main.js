

// change Navbar Size
const nav = document.querySelector('.nav-menu');

window.addEventListener('scroll', (e) =>{
    
    if(window.pageYOffset >= 200){
        nav.classList.add('custom-navbar');
    }else{
        nav.classList.remove('custom-navbar');
        
    }
})


//Change Navbar Toggler Button
const navbtn = document.querySelector('.nav-button');

navbtn.addEventListener('click' , (e) => {
    e.preventDefault();
    navbtn.classList.toggle('change');
})
