import "./styles.css";
import { greeting } from "./modules/startModule.js";
import { formGenerator, loadProjects } from "./modules/formGenerator.js";
//import anyImage from "./image.png";
//const image = document.createElement("img");
// image.src = anyImage;
// document.body.appendChild(image);

console.log(greeting);

formGenerator();
loadProjects();