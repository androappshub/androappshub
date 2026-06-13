const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click',()=>{

document.body.classList.toggle('light-mode');

});

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText='0';

const updateCounter=()=>{

const target=+counter.getAttribute('data-target');

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=
`${Math.ceil(count+increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});

let index=0;

const testimonials=
document.querySelectorAll(".testimonial-card");

function showTestimonials(){

testimonials.forEach(card=>{

card.style.display="none";

});

index++;

if(index>testimonials.length){

index=1;

}

testimonials[index-1].style.display="block";

setTimeout(showTestimonials,3000);

}

showTestimonials();