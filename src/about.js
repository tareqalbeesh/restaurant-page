function pageContent() {
    let content = document.createElement('div')
    content.id = 'content';
    let aboutDiv = document.createElement('div')
    aboutDiv.id = 'about-div';

    let aboutStatementDiv = document.createElement('div')
    aboutStatementDiv.id = 'about-statement-div'
    let ourPromiseH1 = document.createElement('h1')
    ourPromiseH1.innerHTML = `Our Promise <br>
    To You.`
    aboutStatementDiv.appendChild(ourPromiseH1)
    let p = document.createElement('p')
    p.innerText = `From our kitchen to your table in 10 minutes, your meal will be freshly served to satiate your
    apetite. Our world-class servers will make sure your drinks are topped off and food is on your
    table. Your satisfaction is our priority.`
    aboutStatementDiv.appendChild(p)
    aboutDiv.appendChild(aboutStatementDiv)
    let locationDiv = document.createElement('div')
    locationDiv.id = 'location-div'
    let ourLocationH4 = document.createElement('h4')
    ourLocationH4.innerText = 'Our Location:'
    let ourLocationP = document.createElement('p')
    ourLocationH4.innerHTML = `123 Bridge Street <br>
    Nowhere Land, LA 12345 <br>
        United States`
    locationDiv.appendChild(ourLocationH4)
    locationDiv.appendChild(ourLocationP)
    let hoursH4 = document.createElement('h4')
    hoursH4.innerText = 'Hours:'
    let hoursP = document.createElement('p')
    hoursP.innerHTML = `Mon-Fri: 11am - 8pm <br>
    Sat, Sun: 9am - 2pm`
    locationDiv.appendChild(hoursH4)
    locationDiv.appendChild(hoursP)
    let callUsH4 = document.createElement('h4')
    callUsH4.innerText = 'Call us: 555-555-5555'
    locationDiv.appendChild(callUsH4)
    aboutDiv.appendChild(locationDiv)

    content.appendChild(aboutDiv)


    return content;
}
export { pageContent }




