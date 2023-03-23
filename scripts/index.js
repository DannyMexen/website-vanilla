// Main JS file
// Author: Danny Mexen
// Date: Tue 23 Mar 2023

// Company name
const amws = "AMWS";
const amwsFull = `Arcarius Mexen Web Services (${amws})`;

// <head>
const title = document.querySelector('title');
title.textContent = amws;

// <header>
const companyName = document.querySelector('#company-name');
companyName.textContent = amwsFull;
const motto = document.querySelector("#motto");
motto.textContent = "Simple, Elegant.";
const tagline = document.querySelector("#tagline");
tagline.textContent = "Creative trustee for all your enterprise applications.";