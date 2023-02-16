// ==========> Tab - Normal Links <============//
const tablinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
    for(i of tablinks) {
        i.classList.remove("active-link");
    }
    for(j of tabContents) {
        j.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// ==========> navigation Menu <============//

let sidemenu = document.querySelector('.sidemenu'); // it's not neccesary to, declare this..

function openThis() {
    sidemenu = document.querySelector('.sidemenu');
    sidemenu.classList.remove("remove")
    sidemenu.classList.add("active");
}
function closeThis() {
    sidemenu = document.querySelector('.sidemenu');
    sidemenu.classList.remove("active")
}
// YEAH!

