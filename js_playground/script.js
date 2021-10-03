let openApp = true;

let todos = [];

let userInput = prompt('What would you like to do?');

while (userInput != 'quit' && userInput != 'q') {

	if (userInput == 'new') {
		let newTodo = prompt('Insert new Todo.');
		todos.push(newTodo);	
	}

	else if (userInput == 'list'){
		console.log('******************')
		for (let i = 0; i < todos.length; i++){
			console.log(`${i}: ${todos[i]}`);
		}
		console.log('******************')
	}

	else if (userInput == 'delete'){
		let deleteIndex = prompt('Which Todo do you want to delete? (index)');
		todos.splice(deleteIndex);
	}

	//else if (userInput == 'quit'){break}
	//<-- This solution is valid, but it is easier to include this into the while condition instead...

	else {alert('Use one of the four options, please.')}

	userInput = prompt('What would you like to do?');

}