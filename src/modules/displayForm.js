export class DisplayForm {
    constructor() {
        this.leftContainer = document.querySelector(".left-container");
    }

    display() {
        const form = document.createElement("form");
        this.leftContainer.appendChild(form);
    }
}