export function projectDisplay(projectData) {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");

    projectBox.innerHTML = 
      `
        <h3>${projectData.title}</h3>
        <p>${projectData.description}</p>
        <p>Due: ${projectData.dueDate}</p>
        <p>Priority:${projectData.priority}</p>
        <p>Notes: ${projectData.notes}</p>
        <div class="status-container">
          <label>
            <input type="checkbox" 
            ${projectData.status ? "checked" : ""}>
              Complete
          </label>
        </div>
        `;
        
        return projectBox;
    }