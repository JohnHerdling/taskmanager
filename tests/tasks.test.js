const tasks = require("../src/tasks");

test("create a new task", () => {
  const task = tasks.create("Testaufgabe");
  expect(task.title).toBe("Testaufgabe");
});

test("retrieve all tasks", () => {
  const all = tasks.all();
  expect(Array.isArray(all)).toBe(true);
});
