export function createNoteForm() {
    const form = document.createElement("form")

    const titleLabel = document.createElement("label")
    titleLabel.textContent = "Title:"
    const titleInput = document.createElement("input")
    titleInput.type = "text"
    titleInput.name = "title"
    titleLabel.appendChild(titleInput)

    const descriptionLabel = document.createElement("label")
    descriptionLabel.textContent = "Description:"
    const descriptionInput = document.createElement("textarea")
    descriptionInput.name = "description"
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

export function saveNote() {
    // code here
}