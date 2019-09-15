// Task input block

const taskInputElt = document.querySelector('.header__input');
const taskAddButton = document.querySelector('.header__button');

// task input filter
const taskFilterElt = document.querySelector('.filter__input');
const taskFilterButtonElt = document.querySelector('.filter__button');

const tasksElt = document.querySelector('.tasks');

const tasks = [];

taskInputElt.addEventListener('keyup', e => {
  if (e.keyCode === 13 && e.target.value) {
    tasks.unshift({ content: e.target.value });
    e.target.value = '';
  }
});

taskAddButton.addEventListener('click', () => {
  tasks.unshift({ content: taskInputElt.value });
  taskInputElt.value = '';
  loadTasks(tasks);
});

taskFilterButtonElt.addEventListener('click', () => {
  const { value } = taskFilterElt;
  const result = tasks.filter(task => task.content.toLowerCase().includes(value));
  loadTasks(result);
})

const loadTasks = (foundData) => {
  console.log(foundData);

  tasksElt.innerHTML = foundData.map(
    (task, index) => `
    <div class="task">
      <div class="task__content">${task.content}</div>
      <button 
        class="task__action"
        data-index="${index}"
        onclick="deleteTask(${index})"
      >
        Delete
      </button>
    </div>
  `
  );
};
