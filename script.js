let btn=document.querySelector(".mIcon")
let navBar=document.querySelector("nav")

btn.addEventListener("click",()=>{
    btn.classList.toggle("fa-bars")
    btn.classList.toggle("fa-xmark")
    navBar.classList.toggle("active")
})

let allquestionElement=document.querySelectorAll(".education-question h3")
let allanswerElement=document.querySelectorAll(".esucation-answer ul li")

allquestionElement.forEach((item,index)=>{
item.addEventListener("click",()=>{
    item.nextElementSibling.classList.toggle("Showfaq")
})

})

