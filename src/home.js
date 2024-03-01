function pageContent() {
    let content = document.createElement('div')
    content.id = 'content';
    let homeDiv = document.createElement('div')
    homeDiv.id = 'home-div';
    let h1 = document.createElement('h1')
    h1.innerHTML = `We’re Open <br>
    For Takeout!`
    homeDiv.appendChild(h1)
    let p = document.createElement('p')
    p.innerText = 'Enjoy your favorite gou  rmet food from the comfort of your home. Find your favorites on our online menu and simply give us a call to make an order to-go.'
    homeDiv.appendChild(p)
    let button = document.createElement('button')
    button.innerHTML = `<span class="material-symbols-outlined">restaurant_menu
    </span> Browse Menu`
    homeDiv.appendChild(button)



    content.appendChild(homeDiv)


    return content;
}
export { pageContent }


