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

  console.log("Hello Rigo from the console!");

  function arraySelector(array) {
    let element = array[Math.floor(Math.random() * array.length)];
    return element;
  }

  // Generates a new domain when the button is clicked
  function domainGenerator() {
    let domain = `${arraySelector(pronoun)}${arraySelector(adj)}${arraySelector(
      noun
    )}.<strong>${arraySelector(extension)}</strong>`;
    return domain;
  }

  document.getElementById("domain").innerHTML = domainGenerator();

  document
    .getElementById("generateButton")
    .addEventListener("click", function() {
      document.getElementById("domain").innerHTML = domainGenerator();
    });
};
