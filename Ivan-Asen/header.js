document.addEventListener("DOMContentLoaded", (event => {
    const header = document.querySelector("header");
    const nav = document.createElement("nav");
    const ul = document.createElement('ul');
    const img = document.createElement('img');
    const about = document.createElement('a');
    const profile = document.createElement('a');


    img.src = "../Kristiyan/s-arrows-logo.png";
    img.alt = "SplitEase logo";

    // Change to real link
    about.href = 'a';
    about.textContent = 'About';

    user = "Ivan";

    profile.href = '../Milen/profile.html';
    profile.textContent = user[0];

    ul.appendChild(img);
    ul.appendChild(about);
    ul.appendChild(profile);
    nav.appendChild(ul);
    header.appendChild(nav);
}))