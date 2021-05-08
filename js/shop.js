const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const border1 = document.querySelector(".border1");
const border2 = document.querySelector(".border2");


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 12}%`;
    border1.style.width = `${scroll / (sectionY.top + section_height) * 2.5}%`;
    border2.style.width = `${scroll / (sectionY.top + section_height) * 2.5}%`;


})