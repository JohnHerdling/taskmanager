const db = require("better-sqlite3")("./database.sqlite");

// Tabelle anlegen
db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
  )
`).run();

module.exports = {
  all: () => db.prepare("SELECT * FROM tasks").all(),

  create: (title) => {
    const result = db.prepare("INSERT INTO tasks(title) VALUES (?)").run(title);
    return { id: result.lastInsertRowid, title };
  },

  update: (id, title) => {
    db.prepare("UPDATE tasks SET title=? WHERE id=?").run(title, id);
    return { id, title };
  },

  remove: (id) => {
    db.prepare("DELETE FROM tasks WHERE id=?").run(id);
    return { success: true };
  }
};
