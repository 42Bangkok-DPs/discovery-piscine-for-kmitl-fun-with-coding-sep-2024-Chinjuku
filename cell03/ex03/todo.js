window.onload = function () {
    loadTasks(); 
};

document.getElementById('new-task-btn').addEventListener('click', function () {
    let task = prompt('Enter new task:');
    if (task) {
        addTask(task); 
        saveTasks();   
    }
});

function addTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.textContent = task;


    taskDiv.addEventListener('click', function () {
        if (confirm('Do you want to remove this task?')) {
            taskDiv.remove();
            saveTasks(); 
        }
    });


    document.getElementById('ft_list').prepend(taskDiv);
}

function saveTasks() {
    const tasks = [];
    const taskList = document.getElementById('ft_list');


    for (let i = 0; i < taskList.children.length; i++) {
        const taskDiv = taskList.children[i];
        tasks.push(taskDiv.textContent);
    }


    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function loadTasks() {
    const cookies = document.cookie.split(' ');
    console.log(cookies)
    const taskCookie = cookies.find(row => row.startsWith('tasks='));
    if (taskCookie) {
        const tasks = JSON.parse(taskCookie.split('=')[1]);

        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.textContent = task;

            taskDiv.addEventListener('click', function () {
                if (confirm('Do you want to remove this task?')) {
                    taskDiv.remove();
                    saveTasks(); 
                }
            });

            document.getElementById('ft_list').append(taskDiv);
        });
    }
}