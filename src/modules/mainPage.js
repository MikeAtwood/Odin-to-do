function createHeader() {
    const div = document.createElement("div")
    div.textContent = "Odin's To-Do"
    div.classList.add("main-div")
    console.log("hello")
}

function initializeWebsite() {
    const content = document.getElementById("content")

    content.appendChild(createHeader())
}

export default initializeWebsite;