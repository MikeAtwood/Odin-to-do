export function createNoteForm() {
    const form = document.createElement("form")
    form.id = "note-form"

    const titleGroup = document.createElement("div")
    titleGroup.classList.add("form-group")

  

    const titleInput = document.createElement("input")
    titleInput.type = "text"
    titleInput.id = "note-title"
    titleInput.name = "title"
    titleInput.id = "note-title"
    titleInput.required = true

    titleGroup.appendChild(titleInput)

    const contentGroup = document.createElement("div")
    contentGroup.classList.add("form-group")

    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = ""
    descriptionLabel.setAttribute("for", "note-content")

    const descriptionInput = document.createElement("textarea")
    descriptionInput.classList.add("note-content")
    descriptionInput.id = "note-content"
    descriptionInput.textContent = "Description"
    descriptionInput.name = "content"
    descriptionInput.required = true
    descriptionInput.textContent = descriptionLabel.textContent

    contentGroup.appendChild(descriptionLabel)
    contentGroup.appendChild(descriptionInput)
    
    const dateLabel = document.createElement("label")
    const dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.name = "date"
    dateLabel.appendChild(dateInput)

    const submitBtn = document.createElement("button")
    submitBtn.type = "submit"
    submitBtn.textContent = "Save"



    form.appendChild(titleGroup)
    form.appendChild(contentGroup)
    form.appendChild(dateLabel)
    form.appendChild(submitBtn)

    return form
}
const notes = [];

export function saveNote() {
    const title = document.getElementById("note-title").value;
    const content = document.getElementById("note-content").value;
    const date = new Date().toLocaleString()
    console.log(title)
    console.log(content)
    
    const note = { title, content, date }
    notes.push(note)
    console.log("this is the notes array", notes)
    displayNotes()
}

function createNoteElement(note) {
    const noteElement = document.createElement("div")
    noteElement.classList.add("note")

    const titleElement = document.createElement("h3")
    titleElement.textContent = note.title

    const contentElement = document.createElement("p")
    contentElement.textContent = note.content

    const dateElement = document.createElement("span")
    dateElement.textContent = new Date().toLocaleDateString()

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", function() {
        note.remove()
    })

    noteElement.appendChild(titleElement)
    noteElement.appendChild(contentElement)
    noteElement.appendChild(dateElement)
    noteElement.appendChild(deleteButton)

    return noteElement
}

export function displayNotes() {
    const notesContainer = document.getElementById("notes-container")
    notesContainer.id = "notes-container"
    console.log(notesContainer)
    notesContainer.textContent = '';
    
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i]
        const noteElement = createNoteElement(note)
        notesContainer.appendChild(noteElement)
    }
}