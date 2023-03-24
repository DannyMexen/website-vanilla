// Main JS file
// Author: Danny Mexen
// Date: Tue 23 Mar 2023

// Arcarius Mexen
const amws = {
    companyName : {
        abbreviated: "AMWS",
        expanded: "Arcarius Mexen Web Services",
    },
    motto: "Simple, Elegant.",
    tagline: "Creative trustee for all your enterprise application needs."
};

const fullName = `${amws.companyName.expanded} (${amws.companyName.abbreviated})`;
const fullNameTagline = `${fullName} - ${amws.tagline}`;

// <head>
const title = document.querySelector("title");
title.textContent = fullNameTagline;
// TODO: meta


// <header>
const headerCompanyName = document.querySelector("#header-company-name");
headerCompanyName.textContent = fullName;

const headerMotto = document.querySelector("#header-motto");
headerMotto.textContent = amws.motto;

const headerTagline = document.querySelector("#header-tagline");
headerTagline.textContent = amws.tagline;

// Site map
const map = {
    services: "Services",
    products: "Products",
    about: "About",
    contact: "Contact",
};

// <nav>
const navServices = document.querySelector("#nav-services");
navServices.textContent = map.services.toUpperCase();

const navProducts = document.querySelector("#nav-products");
navProducts.textContent = map.products.toUpperCase();

const navAbout = document.querySelector("#nav-about");
navAbout.textContent = map.about.toUpperCase();

const navContact = document.querySelector("#nav-contact");
navContact.textContent = map.contact.toUpperCase();


// <main> <section> headers
const mainServices = document.querySelector("#main-services");
mainServices.textContent = map.services;

const mainProducts = document.querySelector("#main-products");
mainProducts.textContent = map.products;

const mainAbout = document.querySelector("#main-about");
mainAbout.textContent = map.about;

const mainContact = document.querySelector("#main-contact");
mainContact.textContent = map.contact;


// TODO: Forms