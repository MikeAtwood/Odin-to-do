

function createHeader() {
    const header = document.createElement("header")
    header.classList.add("main-div")

    const container = document.createElement("div")
    container.classList.add("header-container")

    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "Odin's To-Do"
    const logo = document.createElement("img")
    logo.classList.add("logo")
    logo.src = "../src/img/icon.png"
    logo.alt = "logo" 

    container.appendChild(logo)
    container.appendChild(title) 
    header.appendChild(container)
    return header
}

function createContainer() {
    const main = document.createElement("div")
    main.classList.add("main-container")

    const navbar = document.createElement("div")
    navbar.classList.add("navbar")

    const head = document.createElement("h2")
    head.classList.add("head")
    head.textContent = "Lists"

    navbar.appendChild(head)
    main.appendChild(navbar)

    return main;
}

function createFooter() {
    const footer = document.createElement("footer")
    footer.classList.add("footer")

    const footerText = document.createElement("h2")
    footerText.classList.add("footer-h2")
    footerText.textContent = ""

    footer.appendChild(footerText)

    return footer
}



function initializeWebsite() {
    const content = document.getElementById("content")
    content.classList.add("content")

    content.appendChild(createHeader())
    content.appendChild(createContainer())
    content.appendChild(createFooter())
}

export default initializeWebsite;