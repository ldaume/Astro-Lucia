import Database from "better-sqlite3";

export const db = new Database("./auth.db", {});

if (import.meta.env.SECRET_INIT_APP === "true") {
  db.exec(`CREATE TABLE IF NOT EXISTS user (
        id TEXT NOT NULL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        role TEXT NOT NULL DEFAULT '',
        password_hash TEXT NOT NULL
)`);

  db.exec(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`);
}

export interface DatabaseUser {
  id: string;
  username: string;
  password_hash: string;
  role: string;
}
