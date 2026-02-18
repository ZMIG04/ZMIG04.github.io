function showFilter() {

const fcForm = document.getElementById("filterContent");

if (fcForm.style.display == "none"){
fcForm.style.display = "block"; 
}
else {
fcForm.style.display = "none";
}

}

function showAddNew() {

const newForm = document.getElementById("newContent");

if (newForm.style.display == "none"){
    newForm.style.display = "block"; 
    }
else {
    newForm.style.display = "none";
    }

}

function addNewArticle() {

//Count number of articles
    const articleDiv = document.getElementById("articleList");
    let articles = articleDiv.getElementsByTagName("article").length;

//Constants for radio buttons
const oRad = document.getElementById("opinionRadio");
const rRad = document.getElementById("recipeRadio");
const uRad = document.getElementById("lifeRadio");

//Constants for text inputs
const iHead = document.getElementById("inputHeader");
const iArt = document.getElementById("inputArticle");

//Create new article
const newArticle = document.createElement("article");
newArticle.id = "a" + articles;

//Marker
const marker = document.createElement("span");
marker.className = "marker";
newArticle.appendChild(marker);

const articleTitle = document.createElement("h2");
    articleTitle.textContent = iHead.value;
    newArticle.appendChild(articleTitle);
const articleContent = document.createElement("p");
    articleContent.textContent = iArt.value;
    newArticle.appendChild(articleContent);

//Choose which class of article to create
if (oRad.checked) {
    newArticle.className = "opinion";
    marker.textContent = "Opinion";
} else if (rRad.checked) {
    newArticle.className = "recipe";
    marker.textContent = "Recipe";
} else if (uRad.checked) {
    newArticle.className = "update";
    marker.textContent = "Update";
} else {
    newArticle.className = "opinion";
    marker.textContent = "Opinion";
}



articleDiv.appendChild(newArticle);


}


function filterArticles() {

const op = document.getElementById("opinionCheckbox");
const rec = document.getElementById("recipeCheckbox");
const upd = document.getElementById("updateCheckbox");

const opinion = document.getElementsByClassName("opinion");
const recipe = document.getElementsByClassName("recipe");
const update = document.getElementsByClassName("update");


    if (op.checked){
        for (let i = 0; i < opinion.length; i++) { 
                opinion[i].style.display = "";
        }
    
    } else {
        for (let i = 0; i < opinion.length; i++) { 
            opinion[i].style.display = "none";
        }
    }

    if (rec.checked){
    for (let i = 0; i < recipe.length; i++) { 
        recipe[i].style.display = "";
    }
    } else {
    for (let i = 0; i < recipe.length; i++) { 
       recipe[i].style.display = "none";
    }
    }

    if (upd.checked){
    for (let i = 0; i < update.length; i++) { 
        update[i].style.display = "";
    }
    } else {
    for (let i = 0; i < update.length; i++) { 
        update[i].style.display = "none";
     }
    }

}