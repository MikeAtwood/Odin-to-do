
function createHeader() {
    const header = document.createElement("header")
    header.classList.add("main-div")

    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "Odin's To-Do" 
     
    header.appendChild(title)
    return header
}


function initializeWebsite() {
    const content = document.getElementById("content")

    content.appendChild(createHeader())
}

export default initializeWebsite;