const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function verifyDatabase() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    const result = await db.all("SELECT name FROM sqlite_master WHERE type='table' AND name='submissions'");
    await db.close();

    if (result.length > 0) {
        console.log("The 'submissions' table exists.");
    } else {
        console.log("The 'submissions' table does not exist.");
    }
}

verifyDatabase().catch(console.error);
