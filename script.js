const nameButton = document.querySelector('.nameButton');
const nameInput = document.querySelector('.nameInput');
const main = document.querySelector('.main');
const username = document.querySelector('.username');
const todoInput = document.querySelector('.todoInput');
const todoList = document.querySelector('.todoList');
const addTodo = document.querySelector('.addBtn');


nameButton.addEventListener('click', () => {
	const inputValue = nameInput.value;
	if (!inputValue){
		alert('Please Enter Your Name');
		return;
	}
	nameButton.style.transform = 'scale(0.9)'
    main.style.left = 0;
    username.innerText = `${inputValue}'s Todos`;
})



addTodo.addEventListener('click', (e) => {
	e.preventDefault()
    const todoItem = document.createElement('li');
    const para = document.createElement('p');
    para.innerText = todoInput.value;
    todoItem.appendChild(para);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'x';
    deleteBtn.className = 'delBtn'
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem)
    todoInput.value = '';

    deleteBtn.addEventListener('click', () => {
    	deleteBtn.closest('li').remove();

    })
})


