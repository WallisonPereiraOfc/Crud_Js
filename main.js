const taskInputField = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let taskCount = 0;

// Listen for a click on the Add Task button, call addTask()
addTaskBtn.addEventListener('click', addTask);

// Listen for the keyboard ENTER key, and call addTask()
taskInputField.addEventListener('keyup', event =>{

	if (event.keyCode === 13){
		event.preventDefault();
		addTask()
	}
});

// Logic to add another task
function addTask(){
	let taskName = taskInputField.value;

	if (taskName != ''){

		let card = document.createElement('div');
		card.className = 'card bg-primary rounded-lg m-2 card-text align-items-end';
		card.id = taskCount;

		let cardBody = document.createElement('div');
		cardBody.className = 'card-body mx-auto';
		cardBody.textContent = taskName;

		let btnDiv = document.createElement('div');
		btnDiv.className = 'd-flex align-items-end btndiv';

		let btnDelete = document.createElement('button');
		btnDelete.type = 'button';
		btnDelete.value = 'delete';
		btnDelete.className = 'btn btn-danger m-1 edit'
		btnDelete.innerHTML = '<i class="fas fa-trash-alt fa-fw m-1"></i>';
		
		let btnComplete = document.createElement('button');
		btnComplete.type = 'button';
		btnComplete.value = 'complete';
		btnComplete.className = 'btn btn-success m-1 edit'
		btnComplete.innerHTML = '<i class="fas fa-check-circle fa-fw m-1"></i>';

		taskList.appendChild(card);
		card.appendChild(cardBody);
		card.appendChild(btnDiv);
		btnDiv.appendChild(btnDelete);
		btnDiv.appendChild(btnComplete);
		taskInputField.value = '';

		taskCount++;

	} else {
		$('#inputErrorModal').modal();
	}

	const btnEdit = document.querySelectorAll('.edit');
	btnEdit.forEach((btnEdit) =>{
		if (btnEdit.value === 'delete'){
			btnEdit.addEventListener('click', removeTask);
		} else if (btnEdit.value === 'complete'){
			btnEdit.addEventListener('click', completeTask);
		}

	});

}

function completeTask(){
	if (this.parentNode.parentNode.classList.contains('bg-primary')){
		this.parentNode.parentNode.classList.replace('bg-primary', 'border-success');	
		this.parentNode.parentNode.classList.add('text-muted');
		this.parentNode.parentNode.classList.add('bg-light');
	} else {
		this.parentNode.parentNode.classList.replace('border-success', 'bg-primary');
		this.parentNode.parentNode.classList.remove('text-muted');
		this.parentNode.parentNode.classList.remove('bg-light');
	}
}


function removeTask(){
	this.parentNode.parentNode.remove();
}

