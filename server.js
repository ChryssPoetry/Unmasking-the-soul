const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(express.static('public'));
app.use(express.json());

const db = new sqlite3.Database('soulvibes.db');
db.run('CREATE TABLE IF NOT EXISTS responses (id INTEGER PRIMARY KEY, username TEXT, p REAL, s REAL, psych REAL, sp REAL, vibe TEXT)');

app.post('/save', (req, res) => {
  const { username, scores, vibe } = req.body;
  db.run('INSERT INTO responses (username, p, s, psych, sp, vibe) VALUES (?, ?, ?, ?, ?, ?)', 
    [username, scores.p, scores.s, scores.psych, scores.sp, vibe.name], () => res.send('Saved'));
});

app.listen(3000, () => console.log('Forge burns at 3000'));