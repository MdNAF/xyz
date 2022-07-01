$(function(){
  
    // type js

    var typed = new Typed('.type', {
        strings: ['Designer',
                  'Freelancer',
                  'Front-End-Devloper'
                ],
        smartBackspace: true,
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
      });


})


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.list');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.mobile_menu ul li a[href*=' + id + ']').parentElement.classList.add('active');
                position()
            });
        }
    });
}




// mobile menu active js starts
let list = document.querySelectorAll('.list');
let listWidth = list[0].clientWidth;
let pos = (listWidth / 2) - 30;//5
let indicator = document.querySelector('.indicator')

// function activeLink(){
//     list.forEach(item => {
//         item.classList.remove('active');
//     });
//     this.classList.add('active')
//     position()
// }

// list.forEach(item =>{
//     item.addEventListener('click',activeLink)
// })

function position(){
    if(list[0].classList.contains('active')){
        indicator.style.left = `${pos}px`;
    
    }else if(list[1].classList.contains('active')){
        indicator.style.left = `${pos + listWidth}px`;
    
    }else if(list[2].classList.contains('active')){
        indicator.style.left = `${pos + (listWidth * 2)}px`;
    
    }else if(list[3].classList.contains('active')){
        indicator.style.left = `${pos + (listWidth * 3)}px`;
    
    }else{
        indicator.style.left = `${pos + (listWidth * 4) -1}px`;
    
    }
}position()
// mobile menu active js ends