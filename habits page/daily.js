const habit = localStorage.getItem('selectedHabit') || "Coding";
document.getElementById('habitTitle').textContent = `Daily Tasks for ${habit}`;

const taskMap = {
  "Coding": [
    "Solve one problem", "Review yesterday's code", "Push to GitHub",
    "Watch a tutorial", "Work on side project", "Code refactor",
    "Read documentation", "Learn new algorithm", "Debug a problem",
    "Practice system design", "Explore Git commands", "Do a mock interview",
    "Write tests", "Code review a friend", "Clean up folders", "Automate something"
  ],

  "Studying": [
    "Study 1 chapter",
    "Make revision notes",
    "Flashcards review",
    "Teach the topic to someone",
    "Solve practice questions",
    "Create a mind map",
    "Watch a related video",
    "Summarize in your own words",
    "Take a self-quiz",
    "Review weak areas",
    "Organize notes",
    "Group study session",
    "Explain aloud",
    "Practice active recall",
    "Time-block a study sprint",
    "Test yourself again"
  ],
  "Reading": [
    "Read 10 pages",
    "Summarize key points",
    "Bookmark fav line",
    "Reflect on what you read",
    "Write a mini review",
    "Try a new genre",
    "Recommend to a friend",
    "Read before bed",
    "Read in a new place",
    "Read out loud",
    "Mark powerful quotes",
    "Analyze a character",
    "Predict the ending",
    "Skim-read a chapter",
    "Track your pages",
    "Write a blog post about it"
  ],
  "Cooking": [
    "Cook a meal",
    "Try a new recipe",
    "Prep next day lunch",
    "Chop ingredients ahead",
    "Bake something sweet",
    "Watch a cooking video",
    "Try a new cuisine",
    "Meal plan for the week",
    "Clean your cooking space",
    "Organize your pantry",
    "Use a new spice",
    "Improve knife skills",
    "Make a family recipe",
    "Plate food aesthetically",
    "Cook without a recipe",
    "Host a mini dinner"
  ],
  "Exercise": [
    "Warm-up",
    "15-min workout",
    "Stretching",
    "Try a new routine",
    "Go for a walk",
    "Track your reps",
    "Do a yoga session",
    "Bodyweight workout",
    "High-intensity workout",
    "Follow a YouTube video",
    "Improve form",
    "Dance for fun",
    "Go outdoors",
    "Hydrate properly",
    "Log your progress",
    "Celebrate movement"
  ],
  "Writing": [
    "Write for 20 mins",
    "Edit yesterday’s writing",
    "Read writing tips",
    "Try a writing prompt",
    "Write a poem",
    "Start a short story",
    "Describe your day",
    "Journal feelings",
    "Create a character",
    "Write dialogue",
    "Rewrite something old",
    "Freewrite nonstop",
    "Use a new word",
    "Show, don’t tell",
    "Write from a new POV",
    "Share your writing"
  ]
};


const totalDays = 16;
const dayButtonsContainer = document.getElementById('dayButtons');
const taskList = document.getElementById('taskList');
const modal = document.getElementById('taskModal');
const closeModalBtn = document.getElementById('closeModal');
const modalDayTitle = document.getElementById('modalDayTitle');

for (let i = 1; i <= totalDays; i++) {
  const btn = document.createElement('button');
  btn.textContent = `Day ${i}`;
  btn.addEventListener('click', () => showTasksForDay(i));
  dayButtonsContainer.appendChild(btn);
}

function showTasksForDay(day) {
  modalDayTitle.textContent = `Tasks for Day ${day}`;
  taskList.innerHTML = '';

  const tasks = taskMap[habit];
  if (tasks && tasks[day - 1]) {
    const li = document.createElement('li');
    li.textContent = tasks[day - 1];
    taskList.appendChild(li);
  } else {
    const li = document.createElement('li');
    li.textContent = "No task found for this day.";
    taskList.appendChild(li);
  }

  modal.style.display = "block";
}

closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

