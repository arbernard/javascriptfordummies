//permet d'ajouter un nouvel élément à la liste de taches
function addNewElement() {
	// Récupération de la liste
	var parentList = document.getElementById("todolist");

	// Nouvel élément de liste
	var myEntry = document.getElementById("newEntry").value;	//récupération de l'entrée de l'utilisateur
	var myText = document.createTextNode(myEntry);	//on range l'entrée de l'utilisateur dans un texte
	var myTask = document.createElement("li");	//création d'un nouvel élément de liste
	myTask.appendChild(myText);	//on associe le texte au nouvel élément de la liste
	
	if(myEntry !== ""){	//si le champ d'entrée utilisateur est non vide
		parentList.appendChild(myTask);	//on ajoute la nouvelle tache à la liste
		document.getElementById("newEntry").value="";	//on vide le champ d'entrée utilisateur
	}

	// Bouton X pour la suppression de l'élement
	var crossSpan = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	crossSpan.className = "close";
	crossSpan.appendChild(txt);
	crossSpan.classList.add("close");
	myTask.appendChild(crossSpan)

	crossSpan.onclick = function() {
		// this.parentNode.outerHTML = "";
		this.parentNode.remove();
	}	
}

//permet de supprimer tous les éléments de la liste
function removeEveryElement(){
	var myArray = Array.from(document.getElementsByTagName("li"));	//on caste le document.getElementsByTagName("li") en array pour pouvoir utiliser le forEach
	myArray.forEach(function(task) {
		task.remove();	//on retire chaque tache de la liste
	});
}

//permet de rechercher un ou des éléments de la liste
function searchAnElement(){
	var myEntry = document.getElementById("searchEntry").value.toUpperCase();	//récupération de l'entrée de l'utilisateur en majuscule
	var myArray = Array.from(document.getElementsByTagName("li"));	//on caste le document.getElementsByTagName("li") en array pour pouvoir utiliser le forEach
	
	myArray.forEach(function(task) {	// Loop through all list items, and hide those who don't match the search query
		if (task.innerText.toUpperCase().indexOf(myEntry) > -1) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
	});
}