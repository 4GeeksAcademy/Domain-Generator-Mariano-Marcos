/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["The", "Our", "Your", "My", "Their", "This", "Every"];

  let adj = [
    "Code",
    "Tech",
    "Digital",
    "Coding",
    "Program",
    "Dev",
    "Web",
    "Codebase",
    "Space",
    "Galactic",
    "Cosmic",
    "Interstellar",
    "Universal"
  ];

  let noun = [
    "Ninja",
    "Geek",
    "Wizard",
    "Guru",
    "Master",
    "Genius",
    "Champion",
    "Pro",
    "Entrepreneur",
    "Startup",
    "Explorer",
    "Pioneer",
    "Astronaut",
    "Alien"
  ];

  let extension = ["com", "co", "us", "com.mx", "es", "io"];

  let icon = [
    `<i class="fa-solid fa-user-ninja"></i>`,
    '<i class="fa-solid fa-glasses"></i>',
    '<i class="fa-solid fa-hat-wizard"></i>',
    '<i class="fa-solid fa-om"></i>',
    '<i class="fa-solid fa-hands-praying"></i>',
    '<i class="fa-solid fa-brain"></i>',
    '<i class="fa-solid fa-trophy"></i>',
    '<i class="fa-solid fa-user-tie"></i>',
    '<i class="fa-solid fa-building"></i>',
    '<i class="fa-solid fa-baby-carriage"></i>',
    '<i class="fa-regular fa-compass"></i>',
    '<i class="fa-solid fa-flag-checkered"></i>',
    '<i class="fa-brands fa-space-awesome"></i>',
    '<i class="fa-brands fa-reddit-alien"></i>'
  ];

  console.log("Hello Rigo from the console!");

  function arrayIndex(array) {
    let index = Math.floor(Math.random() * array.length);
    return index;
  }

  // Function that creates random domains
  function domainGenerator() {
    let nounAndIcon = arrayIndex(noun);
    let domain = `${pronoun[arrayIndex(pronoun)]}${adj[arrayIndex(adj)]}${
      noun[nounAndIcon]
    }.<strong>${extension[arrayIndex(extension)]}</strong>   <strong>${
      icon[nounAndIcon]
    }</strong>`;
    return domain;
  }
  //generates a random domain when the website is first loaded
  document.getElementById("domain").innerHTML = domainGenerator();

  //Generates a random domain everytime the Generate button is pressed
  document
    .getElementById("generateButton")
    .addEventListener("click", function() {
      document.getElementById("domain").innerHTML = domainGenerator();
    });
};
