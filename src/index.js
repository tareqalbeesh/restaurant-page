import { pageContent as home } from "./home"
import { pageContent as menu } from "./menu"
import { pageContent as about } from "./about"


let contentDiv = document.querySelector('#content')
let homeBtn = document.querySelector('#home-btn')
let menuBtn = document.querySelector('#menu-btn')
let aboutBtn = document.querySelector('#about-btn')
homeBtn.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    contentDiv.appendChild(home())
})
menuBtn.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    contentDiv.appendChild(menu())
})
aboutBtn.addEventListener('click', () => {
    contentDiv.innerHTML = ''
    contentDiv.appendChild(about())
})