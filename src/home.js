function pageContent() {
    let component = document.createElement("div")
    let p = document.createElement('p')
    p.innerText = "home";
    component.appendChild(p)
    return component;
}
export { pageContent }