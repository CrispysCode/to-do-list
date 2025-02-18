export function projectDisplay(projectData) {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");

    projectBox.innerHTML = 
      `
        <h3>${projectData.title}</h3>
        <p><em>${projectData.description}<em></p>
        <p><strong>Due:</strong> ${projectData.dueDate}</p>
       <p><strong>${projectData.priority} Priority</strong></p>
        <p class=".notes-right">${projectData.notes}</p>
        <div class="status-container">
          <label>
            <input type="checkbox" 
            ${projectData.status ? "checked" : ""}>
              Complete
          </label>
        </div>
        `;

        const checkbox = projectBox.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", (e) => {
          if (e.target.checked) {
            projectBox.remove();
            const projects = JSON.parse(localStorage.getItem("projects")) || [];
            const updatedProjects = projects.filter(project => project.id !== projectData.id);
            localStorage.setItem("projects", JSON.stringify(updatedProjects));
          }
        })
        
        return projectBox;
    }