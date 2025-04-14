const habit = localStorage.getItem('selectedHabit') || "Coding";
document.getElementById('habitTitle').textContent = `Daily Tasks for ${habit}`;

const taskMap = {
  "Coding": [
    "Solve a problem", "Review code", "Push to GitHub", "Watch a tutorial",
    "Refactor old code", "Read docs", "Fix a bug", "Learn a new algo",
    "Open source contrib", "Mock interview", "Write clean code", "Improve speed",
    "Try a new library", "Take notes", "Write a blog", "Code challenge",
    "Live coding video", "Improve functions", "Real project fix", "Hackathon idea",
    "Write tests", "New feature build", "Review PR", "Reusable components",
    "Comment your code", "Analyze project", "Side project push", "Pair programming",
    "REST API practice", "Reflect and plan"
  ],
  "Studying": [
    "Read a chapter", "Make notes", "Flashcards", "Revise notes",
    "Practice questions", "Watch a lecture", "Summarize content", "Group discussion",
    "Teach the topic", "Quiz self", "Highlight notes", "Mind mapping",
    "Mock test", "Analyze test", "Weak areas", "Revise notes again",
    "Practice diagrams", "Prepare questions", "Topic review", "Study plan",
    "Watch summary", "Past papers", "Join group", "Time-box study",
    "Pomodoro session", "Deep focus", "Verbal revision", "Revisit goals",
    "Memory tricks", "Review all"
  ],
  "Reading": [
    "Read 10 pages", "Highlight lines", "Write summary", "Bookmark fav quote",
    "Read aloud", "New genre try", "Note vocab", "Predict story",
    "Character sketch", "Read author bio", "Listen audiobook", "Write review",
    "Discuss with friend", "Track progress", "Join book club", "Sketch a scene",
    "Analyze chapter", "Speed read", "Re-read fav part", "Rate the book",
    "Search fan art", "Watch adaptation", "New book start", "Set reading goal",
    "Create reading list", "Try poetry", "Pick nonfiction", "Read in nature",
    "Summarize full book", "Gift a book"
  ],
  "Cooking": [
    "Plan a meal", "Cook breakfast", "Try new recipe", "Make snack",
    "Grocery list", "Organize pantry", "Try a dessert", "Bake something",
    "Cook lunch", "Try world cuisine", "Knife skills", "Learn spice mix",
    "Cook for family", "Leftover recipe", "Follow a reel", "Try healthy meal",
    "Watch chef video", "Try plating", "Food photo", "Rate own dish",
    "Try soup", "Cold salad", "Ferment/pickle", "Make chutney",
    "Make smoothie", "Homemade pizza", "Cook outdoors", "Meal prep boxes",
    "Cook comfort food", "Serve with smile"
  ],
  "Exercise": [
    "Stretch for 5 min", "15-min walk", "Home workout", "Push-ups x10",
    "Yoga session", "Dance for 15 min", "Try Pilates", "Mobility routine",
    "Watch workout vid", "Do squats", "Jump rope", "Go for a jog",
    "Do planks", "Core workout", "Shoulder rolls", "Bike ride",
    "Sun salutation", "Quick HIIT", "Try handstand", "Cool down",
    "Water reminder", "Foam roll", "Breathing exercise", "Do lunges",
    "Try Tabata", "Speed walk", "Stair climb", "Balance practice",
    "Stretch in bed", "Celebrate progress"
  ],
  "Writing": [
    "Free write 10 min", "Journal thoughts", "Edit past writing", "Write poem",
    "Character sketch", "Story idea", "Dialogue practice", "Describe a place",
    "Use writing prompt", "Read writing tip", "Try haiku", "Show, don’t tell",
    "Write letter", "Write email draft", "Describe a memory", "Microfiction",
    "Rewrite fav scene", "Word limit story", "Self-reflection", "Scene expansion",
    "Use 5 senses", "Write argument", "Flash fiction", "Write for blog",
    "Write in 3rd person", "Try fan fiction", "Journal emotions", "Describe dream",
    "Set a goal", "Write ending first"
  ]
};

const totalDays = 30;
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


