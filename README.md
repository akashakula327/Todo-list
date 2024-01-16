<!DOCTYPE html>
<html>
<head>
    <title>To-Do List App</title>
  <style>
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fafafa;
    margin: 0;
    font-family: 'Arial', sans-serif;
}

#todo-app {
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

#task-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#add-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.task-text {
    flex-grow: 1;
}

.delete-button {
    margin-left: 10px;
    padding: 4px 8px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
  </style>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="todo-app">
        <!-- Input field for task entry -->
        <input type="text" id="task-input" placeholder="Enter task">




        <!-- Button to add tasks -->
        <button id="add-button">Add Task</button>




        <!-- Unordered list to display tasks -->
        <ul id="task-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
