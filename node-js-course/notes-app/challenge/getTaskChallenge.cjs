//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],

  // My version
  getTasksToDo() {
    let array = this.tasks;

    const filterCompleteTasks = array.filter((task) => task.completed !== true);

    return filterCompleteTasks;
  },

  // Correction
  getTasksToDo1() {
    return this.tasks.filter((task) => task.completed);
  },
};

console.log(tasks.getTasksToDo());
