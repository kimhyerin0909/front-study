let myLeads = [];

const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("save-tab");

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
    }

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

deleteBtn.addEventListener("dblclick", function() {
    myLeads = [];
    localStorage.clear(myLeads);
    render(myLeads);
});

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

function render( leads ) {
    ulEl.innerHTML = '';
    for(let i = 0; i < leads.length; i++) {
        ulEl.innerHTML += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
    }
}

