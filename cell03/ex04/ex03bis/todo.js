$(document).ready(function () {
    loadTasks();

    $('#new-task-btn').on('click', function () {
        let task = prompt('Enter new task:');
        if (task) {
            addTask(task);
            saveTasks();
        }
    });

    function addTask(task) {
        const $taskDiv = $('<div></div>').text(task);

        $taskDiv.on('click', function () {
            if (confirm('Do you want to remove this task?')) {
                $taskDiv.remove();
                saveTasks();
            }
        });

        $('#ft_list').prepend($taskDiv);
    }

    function saveTasks() {
        const tasks = [];
        $('#ft_list').children().each(function () {
            tasks.push($(this).text());
        });

        document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }

    function loadTasks() { 
        const cookies = document.cookie.split('; ');
        const taskCookie = cookies.find(row => row.startsWith('tasks='));
        
        if (taskCookie) {
            const tasks = JSON.parse(taskCookie.split('=')[1]);
            $.each(tasks, function(index, task) {
                const $taskDiv = $('<div></div>').text(task);
                $taskDiv.on('click', function () {
                    if (confirm('Do you want to remove this task?')) {
                        $taskDiv.remove();
                        saveTasks();  
                    }
                });
                $('#ft_list').append($taskDiv);
            });
        }
    }
    
});
