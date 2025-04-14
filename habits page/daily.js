const habit = localStorage.getItem('selectedHabit');
document.getElementById('habitTitle').textContent = `Daily Tasks for ${habit}`;

const taskMap = {
  "Coding": [
    "Solve one problem",
    "Review yesterday's code",
    "Push to GitHub",
    "Refactor an old solution",
    "Watch a tutorial",
    "Take coding notes",
    "Solve a new type of problem",
    "Do a mock interview question",
    "Create a mini project",
    "Write clean documentation",
    "Contribute to open source",
    "Learn a new JS concept",
    "Explore a library",
    "Debug without help",
    "Do a timed challenge",
    "Review and reflect"
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
