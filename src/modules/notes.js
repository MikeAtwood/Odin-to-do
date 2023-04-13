export function createNoteForm() {
    const form = document.createElement("form")

    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Title:"
    const titleInput = document.createElement("input")
    titleInput.type = "text"
    titleInput.classList.add("note-title")
    titleLabel.appendChild(titleInput)

    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = "Description:"
    const descriptionInput = document.createElement("textarea")
    descriptionInput.classList.add("note-description")
    descriptionLabel.appendChild(descriptionInput)
    
    const dateLabel = document.createElement("label")
    dateLabel.textContent = "Date:"
    const dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.name = "date"
    dateLabel.appendChild(dateInput)

    const submitBtn = document.createElement("button")
    submitBtn.type = "submit"
    submitBtn.textContent = "Save"



    form.appendChild(titleLabel)
    form.appendChild(descriptionLabel)
    form.appendChild(dateLabel)
    form.appendChild(submitBtn)

    return form
}
const notes = [];

export function saveNote() {
    const titleInput = document.querySelector("#note-title")[0];
    const descriptionInput = document.querySelector("#note-description")[0];
    console.log(titleInput)
    console.log(descriptionInput)
    const title = titleInput.value
    const description = descriptionInput.value
    const note = { title, description }
    notes.push(note)
    displayNotes()
}

function displayNotes() {
    const notesContainer = document.getElementById("notes-container")
    console.log(notesContainer)
    notesContainer.textContent = ''
    console.log(notes)
    notes.forEach(note => {
        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        const titleElement = document.createElement('h3')
        titleElement.textContent = note.title;
        const contentElement = document.createElement('p')
        contentElement.textContent = note.content;

        noteElement.appendChild(titleElement)
        noteElement.appendChild(contentElement)
        notesContainer.appendChild(noteElement)
    });
}