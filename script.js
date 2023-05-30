const addFormEL = document.getElementById("addform");
const list = document.querySelector(".list");
const searchInput = document.querySelector('.searchinput');


const addTodo = ((todo) => {
  const html = `<li> 
    <h2><i class="fa-solid fa-circle-check done"></i> ${todo}</h2>
    <i class="fa-solid fa-trash delete"></i>
    </li>`;

  list.innerHTML += html;
});

addFormEL.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = e.target.addinput.value.trim();
  if (todo.length) {
    addTodo(todo);
  };
  e.target.reset();
});

list.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    };
});

list.addEventListener('click',(e) => {
    if(e.target.classList.contains('done')){
        e.target.parentElement.parentElement.classList.add('done-todo')
    };
});


const searchTodo = ((term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
});


searchInput.addEventListener('keyup',() => {
    const term = searchInput.value.trim();
    searchTodo(term);
})
