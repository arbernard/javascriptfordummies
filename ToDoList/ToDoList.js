//permet d'ajouter un nouvel élément à la liste de taches
function addNewElement() {
	var myEntry = document.getElementById("newEntry").value;	//récupération de l'entrée de l'utilisateur
	var myText = document.createTextNode(myEntry);	//on range l'entrée de l'utilisateur dans un texte
	var myTask = document.createElement("li");	//création d'un nouvel élément de liste
	myTask.appendChild(myText);	//on associe le texte au nouvel élément de la liste
	document.getElementById("todolist").appendChild(myTask);	//on ajoute la nouvelle tache à la liste
}