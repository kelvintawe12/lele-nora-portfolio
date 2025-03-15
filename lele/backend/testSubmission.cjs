const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function testSubmission() {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    const name = "John Doe";
    const email = "john.doe@example.com";
    const message = "This is a test submission.";

    await db.run('INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
    console.log("Test submission inserted successfully.");

    const result = await db.all('SELECT * FROM submissions');
    console.log("Current submissions:", result);

    await db.close();
}

testSubmission().catch(console.error);
