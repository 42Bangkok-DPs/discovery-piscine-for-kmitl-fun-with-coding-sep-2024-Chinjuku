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
        document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks));
    }

    function loadTasks() { 
        let value = "; " + document.cookie;
        let parts = value.split("; tasks=");
        let taskCookie = parts.pop().split(";").shift();
        
        if (taskCookie) {
            const tasks = JSON.parse(decodeURIComponent(taskCookie));
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
