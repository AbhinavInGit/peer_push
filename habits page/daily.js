const habit = localStorage.getItem('selectedHabit');
document.getElementById('habitTitle').textContent = `Daily Tasks for ${habit}`;

const taskMap = {
  "Coding": ["Solve one problem", "Review yesterday's code", "Push to GitHub"],
  "Studying": ["Study 1 chapter", "Make revision notes", "Flashcards review"],
  "Reading": ["Read 10 pages", "Summarize key points", "Bookmark fav line"],
  "Cooking": ["Cook a meal", "Try a new recipe", "Prep next day lunch"],
  "Exercise": ["Warm-up", "15-min workout", "Stretching"],
  "Writing": ["Write for 20 mins", "Edit yesterday’s writing", "Read writing tips"]
};

const taskList = document.getElementById('taskList');
if (taskMap[habit]) {
  taskMap[habit].forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = `Day ${index + 1}: ${task}`;
    taskList.appendChild(li);
  });
} else {
  taskList.innerHTML = "<li>No tasks found.</li>";
}
