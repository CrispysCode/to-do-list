export function formGenerator() {
    const notepad = document.querySelector(".notepad");
    const form = document.createElement("form");
    notepad.appendChild(form);
    
    //Title 
    const title = document.createElement("input");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Project:"
    title.type = "text";
    title.placeholder = 'Cleaning the dishes..';
    form.appendChild(titleLabel);
    form.appendChild(title);

    //Desc.
    const description = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Why:";
    description.type = "text";
    description.placeholder = "Because I know I am capable of...";
    form.appendChild(descriptionLabel);
    form.appendChild(description);

    //DueDate
    const date = document.createElement("input");
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due Date:";
    date.type = "date";
    date.required = true;
    form.appendChild(dateLabel);
    form.appendChild(date);

    //Priority
    const priority = document.createElement("select");
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    ["Low", "Med", "High"].forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        priority.appendChild(option)
    })
    form.appendChild(priorityLabel);
    form.appendChild(priority);


    //Notes
    const notes = document.createElement("textarea");
    notes.classList.add(".notes");
    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes:";
    notes.required = true;
    notes.placeholder = "Additional Notes...";
    form.appendChild(notesLabel);
    form.appendChild(notes);

    //Status
    const status = document.createElement("input");
    const statusLabel = document.createElement("label");
    statusLabel.textContent = "Completed:";
    status.type = "checkbox";
    form.appendChild(statusLabel);
    form.appendChild(status);

    //Finally the button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add to List!";
    submitBtn.type = "submit";
    form.appendChild(submitBtn);
}
