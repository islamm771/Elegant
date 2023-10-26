let filters = document.querySelectorAll(".filter li");
let imgs = document.querySelectorAll(".all-imgs .row .col-md-6");
let links = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section')

window.addEventListener('scroll' , function(){
    let current = ''
    sections.forEach(section =>{
        sectionTop = section.offsetTop
        if(scrollY > sectionTop - 65 ){
            current = section.getAttribute('id')
        }
        links.forEach((li) => {
          li.classList.remove("active");
          document.querySelector("nav ul li a[href*= " + current + "]").classList.add("active");
        });
    })
})
filters.forEach((li) =>{
    li.addEventListener("click" , removeActive);
    li.addEventListener("click", manageImage);
})

function removeActive(){
    filters.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active")
    })
}

function manageImage(){
    imgs.forEach((img) => {
        if(!img.classList.contains(this.dataset.cat)){
            img.style.display = 'none';
        }else{
            img.style.display = 'block';
        }
    })
}

links.forEach(a =>{
    a.onclick = function(){
        links.forEach(a => a.classList.remove('active'))
        this.classList.add('active')
    }
})
