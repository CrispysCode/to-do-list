import { projectDisplay } from "./projectDisplay.js";


export function formGenerator() {
    const notepad = document.querySelector(".notepad");
    const form = document.createElement("form");
    const rightContainer = document.querySelector(".right-container");
    notepad.appendChild(form);
    
    //Title 
    const title = document.createElement("input");
    title.id = "project-title";
    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "project-title";
    titleLabel.textContent = "Project:"
    title.type = "text";
    title.placeholder = 'Cleaning the dishes..';
    form.appendChild(titleLabel);
    form.appendChild(title);

    //Desc.
    const description = document.createElement("input");
    description.id = "project-description"
    const descriptionLabel = document.createElement("label");
    descriptionLabel.htmlFor = "project-description";
    descriptionLabel.textContent = "Why:";
    description.type = "text";
    description.placeholder = "Because I know I am capable of...";
    form.appendChild(descriptionLabel);
    form.appendChild(description);

    //DueDate
    const date = document.createElement("input");
    date.id = "project-date";
    const dateLabel = document.createElement("label");
    dateLabel.htmlFor = "project-date";
    dateLabel.textContent = "Due Date:";
    date.type = "date";
    date.required = true;
    form.appendChild(dateLabel);
    form.appendChild(date);

    //Priority
    const priority = document.createElement("select");
    priority.id = "project-priority";
    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "project-priority";
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
    notes.id = "project-notes";
    notes.classList.add("notes");
    const notesLabel = document.createElement("label");
    notesLabel.htmlFor = "project-notes";
    notesLabel.textContent = "Notes:";
    notes.required = true;
    notes.placeholder = "Additional Notes...";
    form.appendChild(notesLabel);
    form.appendChild(notes);

    //Status
    const status = document.createElement("input");
    status.classList.add("block-form");
    status.id = "project-status";
    const statusLabel = document.createElement("label");
    statusLabel.classList.add("block-form");
    statusLabel.htmlFor = "project-status";
    statusLabel.textContent = "Completed:";
    status.type = "checkbox";
    // form.appendChild(statusLabel);
    // form.appendChild(status);

    //Finally the button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add to List!";
    submitBtn.type = "submit";
    form.appendChild(submitBtn);

    //Display the form as a flex item
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const projectData = {
            title: title.value,
            description: description.value,
            dueDate: date.value,
            priority: priority.value,
            notes: notes.value,
            status: status.checked
        };

        const projectBox = projectDisplay(projectData);
        rightContainer.appendChild(projectBox);
        form.reset();

    })
}
