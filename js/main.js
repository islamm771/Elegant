let filters = document.querySelectorAll(".filter li");
let imgs = document.querySelectorAll(".all-imgs .row div");
let links = document.querySelectorAll('nav ul li a');
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