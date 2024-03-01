import rollsImage from './images/rolls.jpg'
import pizzaImage from './images/pizza.jpg'
import wrapImage from './images/wrap.jpg'
import fancyWrapImage from './images/fancy-wrap.jpg'
import beansImage from './images/bean-and-cilantro.jpg'
import burgerImage from './images/burger.jpg'
let menuItemsGenerator = function () {
    let menuItems = []

    menuItems.push({ title: "Burger Delight", description: "Lettuce tomato, cheese, and a patty on a sesame seed bun.", price: '8.00', imgSrc: burgerImage })
    menuItems.push({ title: "Mini Wrap", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: '6.00', imgSrc: wrapImage })
    menuItems.push({ title: "Pizza", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: '12.00', imgSrc: pizzaImage })
    menuItems.push({ title: "Fancy Wrap", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: '13.00', imgSrc: fancyWrapImage })
    menuItems.push({ title: "Rolls", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: '21.00', imgSrc: rollsImage })
    menuItems.push({ title: "Bean & Cilantro", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: '13.00', imgSrc: beansImage })


    return menuItems

}
export { menuItemsGenerator }