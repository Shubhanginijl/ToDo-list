window.addEventListener('load', () => {
	const form = document.querySelector("#form");
	const input = document.querySelector("#input");
	const x = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const y = document.createElement('div');
		y.classList.add('task');

		const content = document.createElement('div');
		content.classList.add('content');
        y.appendChild(content);

		const task_input = document.createElement('input');
		task_input.classList.add('text');
		task_input.type = 'text';
		task_input.value = task;
		task_input.setAttribute('readonly', 'readonly');

		content.appendChild(task_input);

		const task_action = document.createElement('div');
		task_action.classList.add('actions');
		
		const task_edit = document.createElement('button');
		task_edit.classList.add('edit');
		task_edit.innerText = 'Edit';

		const task_delete = document.createElement('button');
		task_delete.classList.add('delete');
		task_delete.innerText = 'Delete';

		task_action.appendChild(task_edit);
		task_action.appendChild(task_delete);

		y.appendChild(task_action);

		x.appendChild(y);

		input.value = '';

		task_edit.addEventListener('click', (e) => {
			if (task_edit.innerText.toLowerCase() == "edit") {
				task_edit.innerText = "Save";
				task_input.removeAttribute("readonly");
				task_input.focus();
			} else {
				task_edit.innerText = "Edit";
				task_input.setAttribute("readonly", "readonly");
			}
		});

		task_delete.addEventListener('click', (e) => {
			x.removeChild(y);
		});
	});
});