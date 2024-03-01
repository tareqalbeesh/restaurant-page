import { menuItemsGenerator } from "./data";
function pageContent() {
    let content = document.createElement('div')
    content.classList += 'content';
    let h1 = document.createElement('h1')
    h1.innerText = 'Menu';
    content.appendChild(h1)
    let menuGrid = document.createElement('div');
    menuGrid.classList += 'menu-grid'
    menuItemsGenerator().forEach((item) => {
        let menuItem = document.createElement('div')
        menuItem.classList += 'menu-item'
        let img = document.createElement('img')
        img.src = item.imgSrc
        menuItem.appendChild(img);
        let menuItemDetails = document.createElement('div')
        menuItemDetails.classList += "menu-item-details"
        let title = document.createElement('div')
        title.classList += 'title'
        title.innerText = item.title;
        let description = document.createElement('div')
        description.classList += 'description'
        description.innerText = item.description;
        let price = document.createElement('div')
        price.classList += 'price'
        price.innerText = "$" + item.price;
        menuItemDetails.appendChild(title)
        menuItemDetails.appendChild(description)
        menuItemDetails.appendChild(price)
        menuItem.appendChild(menuItemDetails)
        menuGrid.appendChild(menuItem)

    })
    content.appendChild(menuGrid)
    return content;
}
export { pageContent }

// <h1>Menu</h1>
// <div class="menu-grid">
//     <div class="menu-item">
//         <img src="images/burger.jpg" alt="">
//         <div class="menu-item-details">
//             <div class="title">Burger Delight
//             </div>
//             <div class="description">Lettuce tomato, cheese, and a patty on a sesame seed bun.</div>
//             <div class="price">$8.00</div>
//         </div>
//     </div>