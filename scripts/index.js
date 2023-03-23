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


// <head>
const title = document.querySelector('title');
title.textContent = amws.companyName.abbreviated;
// TODO: meta


// <header>
const fullName = `${amws.companyName.expanded} (${amws.companyName.abbreviated})`;
const headerCompanyName = document.querySelector('#header-company-name');
headerCompanyName.textContent = fullName;

const headerMotto = document.querySelector('#header-motto');
headerMotto.textContent = amws.motto;

const headerTagline = document.querySelector('#header-tagline');
headerTagline.textContent = amws.tagline;

// <nav>
const services = 'Services';
const navServices = document.querySelector('#nav-services');
navServices.textContent = services.toUpperCase();

const products = 'Products';
const navProducts = document.querySelector('#nav-products');
navProducts.textContent = products.toUpperCase();

const about = 'About';
const navAbout = document.querySelector('#nav-about');
navAbout.textContent = about.toUpperCase();

const contact = 'Contact';
const navContact = document.querySelector('#nav-contact');
navContact.textContent = contact.toUpperCase();


// <main> <section> headers
const mainServices = document.querySelector('#main-services');
mainServices.textContent = services;

const mainProducts = document.querySelector('#main-products');
mainProducts.textContent = products;

const mainAbout = document.querySelector('#main-about');
mainAbout.textContent = about;

const mainContact = document.querySelector('#main-contact');
mainContact.textContent = contact;


