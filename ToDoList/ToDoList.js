//permet d'ajouter un nouvel élément à la liste de taches
function addNewElement() {
	// Récupération de la liste
	var parentList = document.getElementById("todolist");

	// Nouvelle élément d eliste
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